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
  // Ensure destinations array exists and has proper structure
  if (!Array.isArray(trip.destinations)) {
    trip.destinations = [];
  }

  // Ensure each destination has all required fields
  trip.destinations = trip.destinations.map(dest => ({
    id: dest.id || genId(),
    country: dest.country || '',
    countryCode: dest.countryCode || '',
    city: dest.city || '',
    region: dest.region || '',
    arrivalDate: dest.arrivalDate || trip.startDate || '',
    departureDate: dest.departureDate || trip.endDate || '',
    currency: dest.currency || '',
    currencyCode: dest.currencyCode || '',
    currencyNotes: dest.currencyNotes || '',
    plugTypes: Array.isArray(dest.plugTypes) ? dest.plugTypes : [],
    voltage: dest.voltage || ''
  }));

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
    const defaults = {
      personalEssentials: [],
      customCategories: [],
      customPriorities: [],
      clothingDefaults: {},
      globalPeople: [],
      homeBase: {
        country: 'United States',
        countryCode: 'US',
        city: '',
        region: ''
      }
    };
    if (!stored) return defaults;
    return { ...defaults, ...stored };
  } catch {
    return {
      personalEssentials: [],
      customCategories: [],
      customPriorities: [],
      clothingDefaults: {},
      globalPeople: [],
      homeBase: {
        country: 'United States',
        countryCode: 'US',
        city: '',
        region: ''
      }
    };
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

export function duplicateTrip(id) {
  const original = getTrip(id);
  if (!original) return null;
  const newId = `trip-${Date.now().toString(36)}`;
  const copy = JSON.parse(JSON.stringify(original));
  copy.id = newId;
  copy.name = `${original.name} (copy)`;
  copy.status = 'active';
  copy.archivedAt = null;
  copy.createdAt = new Date().toISOString();
  (copy.checklistItems ?? []).forEach(item => { item.checked = false; item.tripId = newId; });
  (copy.days ?? []).forEach(d => { d.tripId = newId; });
  (copy.itineraryEvents ?? []).forEach(ev => { ev.tripId = newId; });
  saveTrip(copy);
  return copy;
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

// ---- Destination CRUD ----

export function addDestination(tripId, destination) {
  const trip = getTrip(tripId);
  if (!trip) return null;

  if (!trip.destinations) trip.destinations = [];
  const dest = {
    id: genId(),
    ...destination,
  };
  trip.destinations.push(dest);

  // Sort by arrival date
  trip.destinations.sort((a, b) => (a.arrivalDate ?? '').localeCompare(b.arrivalDate ?? ''));
  saveTrip(trip);
  return dest;
}

export function updateDestination(tripId, destinationId, updates) {
  const trip = getTrip(tripId);
  if (!trip || !trip.destinations) return null;

  const idx = trip.destinations.findIndex(d => d.id === destinationId);
  if (idx < 0) return null;

  trip.destinations[idx] = { ...trip.destinations[idx], ...updates };

  // Sort by arrival date after update
  trip.destinations.sort((a, b) => (a.arrivalDate ?? '').localeCompare(b.arrivalDate ?? ''));
  saveTrip(trip);
  return trip.destinations[idx];
}

export function deleteDestination(tripId, destinationId) {
  const trip = getTrip(tripId);
  if (!trip || !trip.destinations) return false;

  const initialLength = trip.destinations.length;
  trip.destinations = trip.destinations.filter(d => d.id !== destinationId);

  if (trip.destinations.length < initialLength) {
    saveTrip(trip);
    return true;
  }
  return false;
}

