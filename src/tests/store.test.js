import { describe, it, expect, beforeEach } from 'vitest';
import {
  getTrips, saveTrips, getTrip, saveTrip, deleteTrip,
  archiveTrip, unarchiveTrip, duplicateTrip,
  getProfile, saveProfile,
} from '../scripts/store.js';

// Minimal in-memory localStorage shim for Node environment
const store = {};
global.localStorage = {
  getItem:    key      => store[key] ?? null,
  setItem:    (key, v) => { store[key] = String(v); },
  removeItem: key      => { delete store[key]; },
  clear:      ()       => { Object.keys(store).forEach(k => delete store[k]); },
};

function makeTrip(overrides = {}) {
  return {
    id: 'trip-test',
    name: 'Test Trip',
    destination: 'Paris',
    startDate: '2025-08-01',
    endDate: '2025-08-07',
    nights: 6,
    template: 'week',
    status: 'active',
    archivedAt: null,
    createdAt: new Date().toISOString(),
    days: [{ id: 'trip-test-d0', tripId: 'trip-test', date: '2025-08-01', label: 'Day 1', order: 0 }],
    checklistItems: [
      { id: 'ci-1', tripId: 'trip-test', text: 'Passport', checked: false },
      { id: 'ci-2', tripId: 'trip-test', text: 'Sunscreen', checked: true },
    ],
    itineraryEvents: [{ id: 'ev-1', tripId: 'trip-test', dayId: 'trip-test-d0', title: 'Flight' }],
    ...overrides,
  };
}

beforeEach(() => {
  localStorage.clear();
});

// ── getTrips / saveTrips ───────────────────────────────────────────────────────

describe('getTrips', () => {
  it('returns empty array when nothing stored', () => {
    expect(getTrips()).toEqual([]);
  });

  it('returns parsed trips from storage', () => {
    const trips = [makeTrip()];
    localStorage.setItem('tripplanner_trips', JSON.stringify(trips));
    expect(getTrips()).toHaveLength(1);
    expect(getTrips()[0].id).toBe('trip-test');
  });

  it('returns empty array on malformed JSON', () => {
    localStorage.setItem('tripplanner_trips', '{ broken json');
    expect(getTrips()).toEqual([]);
  });
});

describe('saveTrips', () => {
  it('persists array to localStorage', () => {
    const trips = [makeTrip()];
    saveTrips(trips);
    const raw = JSON.parse(localStorage.getItem('tripplanner_trips'));
    expect(raw).toHaveLength(1);
  });
});

// ── getTrip ───────────────────────────────────────────────────────────────────

describe('getTrip', () => {
  it('finds a trip by id', () => {
    saveTrip(makeTrip({ id: 'abc' }));
    expect(getTrip('abc')).not.toBeNull();
  });

  it('returns null for unknown id', () => {
    expect(getTrip('unknown')).toBeNull();
  });
});

// ── saveTrip ──────────────────────────────────────────────────────────────────

describe('saveTrip', () => {
  it('inserts a new trip', () => {
    saveTrip(makeTrip({ id: 'new-1' }));
    expect(getTrips()).toHaveLength(1);
  });

  it('updates an existing trip in-place', () => {
    saveTrip(makeTrip({ id: 'x', name: 'Original' }));
    saveTrip(makeTrip({ id: 'x', name: 'Updated' }));
    const trips = getTrips();
    expect(trips).toHaveLength(1);
    expect(trips[0].name).toBe('Updated');
  });

  it('returns the saved trip', () => {
    const trip = makeTrip({ id: 'y' });
    const result = saveTrip(trip);
    expect(result.id).toBe('y');
  });
});

// ── deleteTrip ────────────────────────────────────────────────────────────────

describe('deleteTrip', () => {
  it('removes the trip', () => {
    saveTrip(makeTrip({ id: 'del-me' }));
    deleteTrip('del-me');
    expect(getTrip('del-me')).toBeNull();
  });

  it('leaves other trips intact', () => {
    saveTrip(makeTrip({ id: 'keep' }));
    saveTrip(makeTrip({ id: 'del-me' }));
    deleteTrip('del-me');
    expect(getTrips()).toHaveLength(1);
    expect(getTrips()[0].id).toBe('keep');
  });

  it('is a no-op for unknown id', () => {
    saveTrip(makeTrip({ id: 'keep' }));
    deleteTrip('nonexistent');
    expect(getTrips()).toHaveLength(1);
  });
});

// ── archiveTrip / unarchiveTrip ───────────────────────────────────────────────

describe('archiveTrip', () => {
  it('sets status to archived', () => {
    saveTrip(makeTrip({ id: 'arc' }));
    archiveTrip('arc');
    expect(getTrip('arc').status).toBe('archived');
  });

  it('sets archivedAt timestamp', () => {
    saveTrip(makeTrip({ id: 'arc' }));
    archiveTrip('arc');
    expect(getTrip('arc').archivedAt).not.toBeNull();
  });

  it('returns null for unknown id', () => {
    expect(archiveTrip('unknown')).toBeNull();
  });
});

describe('unarchiveTrip', () => {
  it('sets status back to active', () => {
    saveTrip(makeTrip({ id: 'un', status: 'archived', archivedAt: '2025-01-01T00:00:00Z' }));
    unarchiveTrip('un');
    expect(getTrip('un').status).toBe('active');
  });

  it('clears archivedAt', () => {
    saveTrip(makeTrip({ id: 'un', status: 'archived', archivedAt: '2025-01-01T00:00:00Z' }));
    unarchiveTrip('un');
    expect(getTrip('un').archivedAt).toBeNull();
  });

  it('returns null for unknown id', () => {
    expect(unarchiveTrip('unknown')).toBeNull();
  });
});

// ── duplicateTrip ─────────────────────────────────────────────────────────────

describe('duplicateTrip', () => {
  it('returns null for unknown id', () => {
    expect(duplicateTrip('none')).toBeNull();
  });

  it('creates a new trip with a different id', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    expect(copy.id).not.toBe('orig');
  });

  it('appends "(copy)" to the name', () => {
    saveTrip(makeTrip({ id: 'orig', name: 'Paris Trip' }));
    const copy = duplicateTrip('orig');
    expect(copy.name).toBe('Paris Trip (copy)');
  });

  it('resets all checklist items to unchecked', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    copy.checklistItems.forEach(i => expect(i.checked).toBe(false));
  });

  it('remaps checklistItems tripId to new id', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    copy.checklistItems.forEach(i => expect(i.tripId).toBe(copy.id));
  });

  it('remaps days tripId to new id', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    copy.days.forEach(d => expect(d.tripId).toBe(copy.id));
  });

  it('remaps itineraryEvents tripId to new id', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    copy.itineraryEvents.forEach(ev => expect(ev.tripId).toBe(copy.id));
  });

  it('sets status to active even if original was archived', () => {
    saveTrip(makeTrip({ id: 'orig', status: 'archived' }));
    const copy = duplicateTrip('orig');
    expect(copy.status).toBe('active');
  });

  it('does not mutate the original trip', () => {
    saveTrip(makeTrip({ id: 'orig', name: 'Original' }));
    duplicateTrip('orig');
    expect(getTrip('orig').name).toBe('Original');
  });

  it('persists the copy so it appears in getTrips()', () => {
    saveTrip(makeTrip({ id: 'orig' }));
    const copy = duplicateTrip('orig');
    expect(getTrip(copy.id)).not.toBeNull();
  });
});

// ── getProfile ────────────────────────────────────────────────────────────────

describe('getProfile', () => {
  it('returns default profile when nothing stored', () => {
    const p = getProfile();
    expect(p.personalEssentials).toEqual([]);
    expect(p.clothingDefaults).toEqual({});
    expect(p.globalPeople).toEqual([]);
    expect(p.customCategories).toEqual([]);
    expect(p.customPriorities).toEqual([]);
  });

  it('merges stored profile with defaults', () => {
    localStorage.setItem('tripplanner_profile', JSON.stringify({ globalPeople: [{ id: '1', name: 'Alice' }] }));
    const p = getProfile();
    expect(p.globalPeople).toHaveLength(1);
    expect(p.personalEssentials).toEqual([]);
  });

  it('returns defaults on malformed JSON', () => {
    localStorage.setItem('tripplanner_profile', '{ bad json');
    const p = getProfile();
    expect(p.personalEssentials).toEqual([]);
  });
});

describe('saveProfile', () => {
  it('persists profile to localStorage', () => {
    const profile = { personalEssentials: [{ text: 'Camera' }], clothingDefaults: {}, globalPeople: [], customCategories: [], customPriorities: [] };
    saveProfile(profile);
    const loaded = getProfile();
    expect(loaded.personalEssentials[0].text).toBe('Camera');
  });
});

// ── Data migration resilience ─────────────────────────────────────────────────

describe('legacy data handling', () => {
  it('getTrips handles trips missing new fields without crashing', () => {
    const legacy = [{ id: 'old', name: 'Old Trip', days: [], checklistItems: [] }];
    localStorage.setItem('tripplanner_trips', JSON.stringify(legacy));
    expect(() => getTrips()).not.toThrow();
    expect(getTrips()[0].id).toBe('old');
  });

  it('duplicateTrip handles missing checklistItems gracefully', () => {
    const t = makeTrip({ id: 'no-ci' });
    delete t.checklistItems;
    saveTrip(t);
    expect(() => duplicateTrip('no-ci')).not.toThrow();
  });

  it('duplicateTrip handles missing itineraryEvents gracefully', () => {
    const t = makeTrip({ id: 'no-ev' });
    delete t.itineraryEvents;
    saveTrip(t);
    expect(() => duplicateTrip('no-ev')).not.toThrow();
  });
});
