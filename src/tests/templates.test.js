import { describe, it, expect } from 'vitest';
import {
  calcEndDate,
  calcClothing,
  buildInitialChecklist,
  buildDays,
  TEMPLATES,
} from '../scripts/templates.js';

// calcEndDate relies on genId from store.js which touches localStorage — no issue here since
// templates.js itself has no localStorage access.

describe('calcEndDate', () => {
  it('adds nights to start date', () => {
    expect(calcEndDate('2025-06-01', 2)).toBe('2025-06-03');
  });

  it('handles 1 night (overnight)', () => {
    expect(calcEndDate('2025-06-01', 1)).toBe('2025-06-02');
  });

  it('handles 7 nights', () => {
    expect(calcEndDate('2025-06-01', 7)).toBe('2025-06-08');
  });

  it('handles month boundary', () => {
    expect(calcEndDate('2025-01-29', 3)).toBe('2025-02-01');
  });

  it('handles year boundary', () => {
    expect(calcEndDate('2024-12-30', 3)).toBe('2025-01-02');
  });

  it('returns NaN-based invalid date string when nights is 0', () => {
    const result = calcEndDate('2025-06-01', 0);
    expect(result).toBe('2025-06-01');
  });

  it('throws RangeError when nights is NaN', () => {
    expect(() => calcEndDate('2025-06-01', NaN)).toThrow(RangeError);
  });

  it('returns invalid date string when nights is negative', () => {
    const result = calcEndDate('2025-06-01', -1);
    expect(result).toBe('2025-05-31');
  });

  it('throws RangeError when startDate is empty', () => {
    expect(() => calcEndDate('', 3)).toThrow(RangeError);
  });
});

describe('calcClothing', () => {
  describe('without laundry plan', () => {
    it('returns 1 outfit per night by default', () => {
      const c = calcClothing(3);
      expect(c.outfits).toBe(3);
      expect(c.underwear).toBe(3);
      expect(c.socks).toBe(3);
      expect(c.pajamas).toBe(1);
    });

    it('respects extraUnderwear profile default', () => {
      const c = calcClothing(3, {}, { extraUnderwear: 2 });
      expect(c.underwear).toBe(5);
    });

    it('respects extraSocks profile default', () => {
      const c = calcClothing(3, {}, { extraSocks: 1 });
      expect(c.socks).toBe(4);
    });

    it('respects extraOutfits profile default', () => {
      const c = calcClothing(3, {}, { extraOutfits: 1 });
      expect(c.outfits).toBe(4);
    });

    it('respects pajamas profile default', () => {
      const c = calcClothing(3, {}, { pajamas: 2 });
      expect(c.pajamas).toBe(2);
    });

    it('overrides take precedence over profile defaults', () => {
      const c = calcClothing(7, { outfits: 3 }, { extraOutfits: 5 });
      expect(c.outfits).toBe(3);
    });

    it('overrides take precedence over calculation', () => {
      const c = calcClothing(7, { underwear: 4 });
      expect(c.underwear).toBe(4);
    });

    it('handles 0 nights', () => {
      const c = calcClothing(0);
      expect(c.outfits).toBe(0);
    });
  });

  describe('with laundry plan', () => {
    it('applies min(nights, everyXDays)+1 formula', () => {
      const plan = { enabled: true, everyXDays: 7 };
      const c = calcClothing(14, {}, {}, plan);
      expect(c.outfits).toBe(8); // min(14,7)+1
    });

    it('uses nights when shorter than laundry cycle', () => {
      const plan = { enabled: true, everyXDays: 7 };
      const c = calcClothing(3, {}, {}, plan);
      expect(c.outfits).toBe(4); // min(3,7)+1
    });

    it('handles everyXDays equal to nights', () => {
      const plan = { enabled: true, everyXDays: 5 };
      const c = calcClothing(5, {}, {}, plan);
      expect(c.outfits).toBe(6); // min(5,5)+1
    });

    it('ignores plan when disabled', () => {
      const plan = { enabled: false, everyXDays: 3 };
      const c = calcClothing(14, {}, {}, plan);
      expect(c.outfits).toBe(14);
    });

    it('ignores plan when everyXDays is 0', () => {
      const plan = { enabled: true, everyXDays: 0 };
      const c = calcClothing(14, {}, {}, plan);
      expect(c.outfits).toBe(14);
    });

    it('profile extras apply on top of laundry base', () => {
      const plan = { enabled: true, everyXDays: 7 };
      const c = calcClothing(14, {}, { extraOutfits: 2 }, plan);
      expect(c.outfits).toBe(10); // min(14,7)+1+2
    });

    it('overrides still win over laundry calculation', () => {
      const plan = { enabled: true, everyXDays: 7 };
      const c = calcClothing(14, { outfits: 5 }, {}, plan);
      expect(c.outfits).toBe(5);
    });
  });
});

describe('TEMPLATES', () => {
  it('overnight has 1 night', () => expect(TEMPLATES.overnight.nights).toBe(1));
  it('weekend has 2 nights', () => expect(TEMPLATES.weekend.nights).toBe(2));
  it('short has 3 nights', () => expect(TEMPLATES.short.nights).toBe(3));
  it('week has 7 nights', () => expect(TEMPLATES.week.nights).toBe(7));
  it('custom has null nights', () => expect(TEMPLATES.custom.nights).toBeNull());

  it('buildDays for overnight produces 2 days', () => {
    const days = buildDays('t1', '2025-06-01', TEMPLATES.overnight.nights);
    expect(days).toHaveLength(2);
    expect(days[0].label).toBe('Day 1 – Departure');
    expect(days[1].label).toBe('Day 2 – Return');
  });

  it('buildDays for weekend produces 3 days', () => {
    const days = buildDays('t1', '2025-06-01', TEMPLATES.weekend.nights);
    expect(days).toHaveLength(3);
  });

  it('buildDays for week produces 8 days', () => {
    const days = buildDays('t1', '2025-06-01', TEMPLATES.week.nights);
    expect(days).toHaveLength(8);
  });
});

describe('buildDays', () => {
  it('generates correct dates in sequence', () => {
    const days = buildDays('trip1', '2025-06-01', 3);
    expect(days.map(d => d.date)).toEqual(['2025-06-01', '2025-06-02', '2025-06-03', '2025-06-04']);
  });

  it('labels single-day trip correctly', () => {
    const days = buildDays('trip1', '2025-06-01', 0);
    expect(days).toHaveLength(1);
    expect(days[0].label).toBe('Day Trip');
  });

  it('assigns correct order values', () => {
    const days = buildDays('trip1', '2025-06-01', 2);
    expect(days.map(d => d.order)).toEqual([0, 1, 2]);
  });

  it('prefixes IDs with tripId', () => {
    const days = buildDays('abc', '2025-06-01', 1);
    days.forEach(d => expect(d.id).toMatch(/^abc-d\d+$/));
  });

  it('sets tripId on each day', () => {
    const days = buildDays('mytrip', '2025-06-01', 2);
    days.forEach(d => expect(d.tripId).toBe('mytrip'));
  });
});

describe('buildInitialChecklist', () => {
  it('includes 4 clothing items', () => {
    const items = buildInitialChecklist('t1', 3);
    const clothing = items.filter(i => i.isClothing);
    expect(clothing).toHaveLength(4);
  });

  it('clothing items have correct types', () => {
    const items = buildInitialChecklist('t1', 3);
    const types = items.filter(i => i.isClothing).map(i => i.clothingType);
    expect(types).toEqual(expect.arrayContaining(['underwear', 'socks', 'outfits', 'pajamas']));
  });

  it('clothing quantities match nights', () => {
    const items = buildInitialChecklist('t1', 5);
    const byType = Object.fromEntries(items.filter(i => i.isClothing).map(i => [i.clothingType, i.quantity]));
    expect(byType.outfits).toBe(5);
    expect(byType.underwear).toBe(5);
    expect(byType.socks).toBe(5);
    expect(byType.pajamas).toBe(1);
  });

  it('appends profile essentials', () => {
    const essentials = [{ text: 'Sunscreen', category: 'toiletries' }];
    const items = buildInitialChecklist('t1', 3, essentials);
    const found = items.find(i => i.text === 'Sunscreen');
    expect(found).toBeDefined();
    expect(found.category).toBe('toiletries');
  });

  it('all items start unchecked', () => {
    const essentials = [{ text: 'Camera', category: null }];
    const items = buildInitialChecklist('t1', 3, essentials);
    items.forEach(i => expect(i.checked).toBe(false));
  });

  it('all items have an id', () => {
    const items = buildInitialChecklist('t1', 3);
    items.forEach(i => expect(i.id).toBeTruthy());
  });

  it('all items have tripId set', () => {
    const items = buildInitialChecklist('mytrip', 3);
    items.forEach(i => expect(i.tripId).toBe('mytrip'));
  });

  it('returns only clothing items when no profile essentials', () => {
    const items = buildInitialChecklist('t1', 3);
    expect(items).toHaveLength(4);
  });
});
