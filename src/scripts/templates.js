import { genId } from './store.js';

export const TEMPLATES = {
  overnight: { label: 'Overnight', nights: 1 },
  weekend:   { label: 'Weekend',   nights: 2 },
  short:     { label: 'Short Trip', nights: 3 },
  week:      { label: 'Week Trip',  nights: 7 },
  custom:    { label: 'Custom',     nights: null },
};

export const ALWAYS_ESSENTIALS = [
  'Toothbrush', 'Toothpaste', 'Deodorant', 'Chapstick',
  'Phone + Charger', 'Wallet + ID',
];

export const BADGES = ['essential', 'clothing', 'flight', 'medical', 'concert', 'hotel', 'activity', 'personal'];

export const BADGE_STYLES = {
  essential: 'bg-gray-100 text-gray-700',
  clothing:  'bg-orange-100 text-orange-800',
  flight:    'bg-blue-100 text-blue-800',
  medical:   'bg-red-100 text-red-800',
  concert:   'bg-purple-100 text-purple-800',
  hotel:     'bg-yellow-100 text-yellow-800',
  activity:  'bg-teal-100 text-teal-800',
  personal:  'bg-green-100 text-green-800',
};

export function badgeClasses(badge) {
  return BADGE_STYLES[badge] ?? 'bg-gray-100 text-gray-600';
}

export function calcClothing(nights, overrides = {}) {
  return {
    underwear: overrides.underwear ?? nights,
    socks:     overrides.socks     ?? nights,
    outfits:   overrides.outfits   ?? nights,
    pajamas:   overrides.pajamas   ?? 1,
  };
}

export function buildDays(tripId, startDate, nights) {
  const days = [];
  const total = nights + 1;
  for (let i = 0; i < total; i++) {
    const d = new Date(`${startDate}T12:00:00`);
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    let label;
    if (total === 1) label = 'Day Trip';
    else if (i === 0) label = 'Day 1 – Departure';
    else if (i === total - 1) label = `Day ${i + 1} – Return`;
    else label = `Day ${i + 1}`;
    days.push({ id: `${tripId}-d${i}`, tripId, date: dateStr, label, order: i });
  }
  return days;
}

export function buildInitialChecklist(tripId, days, nights, profileEssentials = [], overrides = null) {
  const firstDayId = days[0]?.id;
  if (!firstDayId) return [];

  const clothing = calcClothing(nights, overrides ?? {});
  const items = [];

  // Always-essentials on day 1
  for (const text of ALWAYS_ESSENTIALS) {
    items.push({ id: genId(), tripId, dayId: firstDayId, text, badge: 'essential', checked: false, quantity: null });
  }

  // Clothing on day 1
  const clothingItems = [
    { text: 'Underwear', type: 'underwear', qty: clothing.underwear },
    { text: 'Socks',     type: 'socks',     qty: clothing.socks },
    { text: 'Outfits',   type: 'outfits',   qty: clothing.outfits },
    { text: 'Pajamas',   type: 'pajamas',   qty: clothing.pajamas },
  ];
  for (const c of clothingItems) {
    items.push({
      id: genId(), tripId, dayId: firstDayId,
      text: c.text, badge: 'clothing', checked: false, quantity: c.qty,
      isClothing: true, clothingType: c.type,
    });
  }

  // Personal essentials from profile on day 1
  for (const pe of profileEssentials) {
    items.push({
      id: genId(), tripId, dayId: firstDayId,
      text: pe.text, badge: 'personal', checked: false, quantity: null,
    });
  }

  return items;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(`${dateStr}T12:00:00`);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export function formatDateRange(startDate, endDate) {
  const s = new Date(`${startDate}T12:00:00`);
  const e = new Date(`${endDate}T12:00:00`);
  const opts = { month: 'short', day: 'numeric' };
  if (s.getFullYear() !== e.getFullYear()) opts.year = 'numeric';
  return `${s.toLocaleDateString('en-US', opts)} – ${e.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`;
}

export function calcEndDate(startDate, nights) {
  const d = new Date(`${startDate}T12:00:00`);
  d.setDate(d.getDate() + nights);
  return d.toISOString().split('T')[0];
}
