const TRIPS_KEY = 'tripplanner_trips';
const PROFILE_KEY = 'tripplanner_profile';

export function genId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// ---- Trips ----

export function getTrips() {
  try { return JSON.parse(localStorage.getItem(TRIPS_KEY) || '[]'); }
  catch { return []; }
}

export function saveTrips(trips) {
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
}

export function getTrip(id) {
  return getTrips().find(t => t.id === id) ?? null;
}

export function saveTrip(trip) {
  const trips = getTrips();
  const idx = trips.findIndex(t => t.id === trip.id);
  if (idx >= 0) trips[idx] = trip; else trips.push(trip);
  saveTrips(trips);
  return trip;
}

export function deleteTrip(id) {
  saveTrips(getTrips().filter(t => t.id !== id));
}

export function archiveTrip(id) {
  const trip = getTrip(id);
  if (!trip) return null;
  trip.status = 'archived';
  trip.archivedAt = new Date().toISOString();
  return saveTrip(trip);
}

export function unarchiveTrip(id) {
  const trip = getTrip(id);
  if (!trip) return null;
  trip.status = 'active';
  trip.archivedAt = null;
  return saveTrip(trip);
}

// ---- Profile ----

export function getProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null');
    const defaults = { personalEssentials: [], customCategories: [], customPriorities: [] };
    if (!stored) return defaults;
    return { ...defaults, ...stored };
  } catch {
    return { personalEssentials: [], customCategories: [], customPriorities: [] };
  }
}

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

// ---- Export / Import ----

export function exportTrip(trip) {
  const json = JSON.stringify(trip, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${trip.name.replace(/\s+/g, '-').toLowerCase()}-${trip.startDate}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function exportAllTrips() {
  const trips = getTrips();
  const json = JSON.stringify({ version: 1, trips }, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `trip-planner-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function importTripFromJSON(jsonText) {
  const data = JSON.parse(jsonText);
  // Support both single trip and backup bundle
  const trip = data.trips ? data.trips[0] : data;
  if (!trip.name || !Array.isArray(trip.days)) throw new Error('Invalid trip format');
  trip.id = genId();
  trip.status = 'active';
  trip.archivedAt = null;
  trip.importedAt = new Date().toISOString();
  saveTrip(trip);
  return trip;
}

