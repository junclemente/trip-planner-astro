const TRIPS_KEY = 'tripplanner_trips';
const PROFILE_KEY = 'tripplanner_profile';
const SEEDED_KEY = 'tripplanner_seeded';

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
    return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null')
      ?? { personalEssentials: [] };
  } catch { return { personalEssentials: [] }; }
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

// ---- Seed data ----

export function initSeedData() {
  if (localStorage.getItem(SEEDED_KEY)) return;

  const tripId = 'seed-bts-vegas';

  const days = [
    { id: 'd1', tripId, date: '2025-05-23', label: 'Day 1 – Departure', order: 0 },
    { id: 'd2', tripId, date: '2025-05-24', label: 'Day 2 – Concert Day', order: 1 },
    { id: 'd3', tripId, date: '2025-05-25', label: 'Day 3 – Return', order: 2 },
  ];

  const ci = (dayId, text, badge, quantity = null, extra = {}) => ({
    id: genId(), tripId, dayId, text, badge, checked: false, quantity, ...extra,
  });

  const checklistItems = [
    // Day 1 – essentials
    ci('d1', 'Toothbrush', 'essential'),
    ci('d1', 'Toothpaste', 'essential'),
    ci('d1', 'Deodorant', 'essential'),
    ci('d1', 'Chapstick', 'essential'),
    ci('d1', 'Phone + Charger', 'essential'),
    ci('d1', 'Wallet + ID', 'essential'),
    // Day 1 – clothing (2 nights = weekend)
    ci('d1', 'Underwear', 'clothing', 2, { isClothing: true, clothingType: 'underwear' }),
    ci('d1', 'Socks', 'clothing', 2, { isClothing: true, clothingType: 'socks' }),
    ci('d1', 'Outfits', 'clothing', 2, { isClothing: true, clothingType: 'outfits' }),
    ci('d1', 'Pajamas', 'clothing', 1, { isClothing: true, clothingType: 'pajamas' }),
    // Day 1 – flight
    ci('d1', 'Flight tickets (digital)', 'flight'),
    ci('d1', 'Outbound boarding pass', 'flight'),
    // Day 2 – concert
    ci('d2', 'Concert ticket', 'concert'),
    ci('d2', 'Lightstick / ARMY Bomb', 'concert'),
    ci('d2', 'Fan concert outfit', 'concert'),
    ci('d2', 'Portable phone charger', 'essential'),
    // Day 3 – return
    ci('d3', 'Return boarding pass', 'flight'),
    ci('d3', 'Pack all items', 'essential'),
  ];

  const ev = (dayId, time, title, notes = '') => ({
    id: genId(), tripId, dayId, time, title, notes,
  });

  const itineraryEvents = [
    ev('d1', '07:00', 'Depart San Diego', 'Drive to SAN airport – Terminal 2, check luggage'),
    ev('d1', '09:30', 'Flight SAN → LAS', 'Southwest Airlines, approx. 1 hr flight'),
    ev('d1', '11:00', 'Arrive Las Vegas (LAS)', 'Rideshare to hotel on the Strip'),
    ev('d1', '12:30', 'Hotel check-in', 'Drop luggage, freshen up'),
    ev('d1', '14:00', 'Explore the Strip', 'Walk, lunch, take in the sights'),
    ev('d2', '10:00', 'Brunch', 'Hotel buffet or nearby café'),
    ev('d2', '14:00', 'Pre-show prep', 'Concert outfit, charge all devices'),
    ev('d2', '17:00', 'Head to T-Mobile Arena', 'Arrive early for official merch'),
    ev('d2', '20:00', 'BTS Concert @ T-Mobile Arena', '🎤 Vegas residency – main event!'),
    ev('d3', '09:00', 'Hotel checkout', 'Pack everything, checkout by 11am'),
    ev('d3', '12:00', 'Head to LAS airport', 'Rideshare, allow extra time'),
    ev('d3', '13:30', 'Return flight LAS → SAN', 'Southwest Airlines'),
    ev('d3', '15:00', 'Arrive home ✈️', 'Back in San Diego!'),
  ];

  const seedTrip = {
    id: tripId,
    name: 'BTS Vegas Concert',
    destination: 'Las Vegas, NV',
    departFrom: 'San Diego, CA',
    startDate: '2025-05-23',
    endDate: '2025-05-25',
    nights: 2,
    template: 'weekend',
    status: 'active',
    createdAt: '2025-04-01T00:00:00.000Z',
    archivedAt: null,
    clothingOverrides: null,
    days,
    checklistItems,
    itineraryEvents,
  };

  saveTrips([seedTrip]);
  localStorage.setItem(SEEDED_KEY, '1');
}
