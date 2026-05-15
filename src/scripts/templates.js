import { genId } from './store.js';

export const TEMPLATES = {
  overnight: { label: 'Overnight', nights: 1 },
  weekend:   { label: 'Weekend',   nights: 2 },
  short:     { label: 'Short Trip', nights: 3 },
  week:      { label: 'Week Trip',  nights: 7 },
  custom:    { label: 'Custom',     nights: null },
};

export const RECOMMENDED_DEFAULTS = [
  { text: 'Toothbrush',      suggestedCategory: 'toiletries' },
  { text: 'Toothpaste',      suggestedCategory: 'toiletries' },
  { text: 'Deodorant',       suggestedCategory: 'toiletries' },
  { text: 'Chapstick',       suggestedCategory: 'toiletries' },
  { text: 'Phone + Charger', suggestedCategory: null },
  { text: 'Wallet + ID',     suggestedCategory: null },
];

export const DEFAULT_CATEGORIES = [
  { id: 'toiletries', label: 'Toiletries', color: 'bg-teal-100 text-teal-800' },
  { id: 'clothing',   label: 'Clothing',   color: 'bg-orange-100 text-orange-800' },
  { id: 'flight',     label: 'Flight',     color: 'bg-blue-100 text-blue-800' },
  { id: 'concert',    label: 'Concert',    color: 'bg-purple-100 text-purple-800' },
  { id: 'hotel',      label: 'Hotel',      color: 'bg-yellow-100 text-yellow-800' },
  { id: 'activity',   label: 'Activity',   color: 'bg-green-100 text-green-800' },
];

export const DEFAULT_PRIORITIES = [
  { id: 'essential',   label: 'Essential',    color: 'bg-red-100 text-red-800' },
  { id: 'optional',    label: 'Optional',     color: 'bg-gray-100 text-gray-600' },
  { id: 'dont-forget', label: "Don't Forget", color: 'bg-amber-100 text-amber-800' },
];

// Custom colors available for user-created categories and priorities.
// The `cls` string must appear here in full so Tailwind detects them.
export const CUSTOM_COLORS = [
  { id: 'rose',    cls: 'bg-rose-100 text-rose-800',       dot: '#fb7185' },
  { id: 'orange',  cls: 'bg-orange-100 text-orange-800',   dot: '#fb923c' },
  { id: 'amber',   cls: 'bg-amber-100 text-amber-800',     dot: '#fbbf24' },
  { id: 'lime',    cls: 'bg-lime-100 text-lime-800',       dot: '#a3e635' },
  { id: 'sky',     cls: 'bg-sky-100 text-sky-800',         dot: '#38bdf8' },
  { id: 'violet',  cls: 'bg-violet-100 text-violet-800',   dot: '#a78bfa' },
  { id: 'fuchsia', cls: 'bg-fuchsia-100 text-fuchsia-800', dot: '#e879f9' },
  { id: 'slate',   cls: 'bg-slate-100 text-slate-800',     dot: '#94a3b8' },
];

// Returns all categories (built-in + custom) with a resolved `color` class string.
export function getAllCategories(customCategories = []) {
  const customs = customCategories.map(c => ({
    ...c,
    color: CUSTOM_COLORS.find(cc => cc.id === c.colorId)?.cls ?? 'bg-gray-100 text-gray-600',
  }));
  return [...DEFAULT_CATEGORIES, ...customs];
}

// Returns all priorities (built-in + custom) with a resolved `color` class string.
export function getAllPriorities(customPriorities = []) {
  const customs = customPriorities.map(p => ({
    ...p,
    color: CUSTOM_COLORS.find(cc => cc.id === p.colorId)?.cls ?? 'bg-gray-100 text-gray-600',
  }));
  return [...DEFAULT_PRIORITIES, ...customs];
}

export function getCategoryColor(id, customCategories = []) {
  return getAllCategories(customCategories).find(c => c.id === id)?.color ?? 'bg-gray-100 text-gray-600';
}

export function getPriorityColor(id, customPriorities = []) {
  return getAllPriorities(customPriorities).find(p => p.id === id)?.color ?? 'bg-gray-100 text-gray-600';
}

export function getCategoryLabel(id, customCategories = []) {
  return getAllCategories(customCategories).find(c => c.id === id)?.label ?? id;
}

export function getPriorityLabel(id, customPriorities = []) {
  return getAllPriorities(customPriorities).find(p => p.id === id)?.label ?? id;
}

// Migrates items that still use the old single `badge` field to the new
// `category` + `priority` two-tag system. Returns true if any items changed.
export function migrateChecklistItems(items) {
  const BADGE_TO_CATEGORY = {
    clothing: 'clothing', flight: 'flight', concert: 'concert',
    hotel: 'hotel', activity: 'activity',
  };
  const BADGE_TO_PRIORITY = { essential: 'essential' };

  let changed = false;
  for (const item of items) {
    if (!('category' in item) && !('priority' in item)) {
      item.category = BADGE_TO_CATEGORY[item.badge] ?? null;
      item.priority = BADGE_TO_PRIORITY[item.badge] ?? null;
      delete item.badge;
      changed = true;
    }
  }
  return changed;
}

export function calcClothing(nights, overrides = {}, profileDefaults = {}) {
  return {
    underwear: overrides.underwear ?? (nights + (profileDefaults.extraUnderwear ?? 0)),
    socks:     overrides.socks     ?? (nights + (profileDefaults.extraSocks     ?? 0)),
    outfits:   overrides.outfits   ?? (nights + (profileDefaults.extraOutfits   ?? 0)),
    pajamas:   overrides.pajamas   ?? (profileDefaults.pajamas ?? 1),
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

export function buildInitialChecklist(tripId, nights, profileEssentials = [], clothingDefaults = {}) {
  const clothing = calcClothing(nights, {}, clothingDefaults);
  const items = [];

  const clothingItems = [
    { text: 'Underwear', type: 'underwear', qty: clothing.underwear },
    { text: 'Socks',     type: 'socks',     qty: clothing.socks },
    { text: 'Outfits',   type: 'outfits',   qty: clothing.outfits },
    { text: 'Pajamas',   type: 'pajamas',   qty: clothing.pajamas },
  ];
  for (const c of clothingItems) {
    items.push({
      id: genId(), tripId, dayId: null,
      text: c.text, category: 'clothing', priority: null,
      checked: false, quantity: c.qty,
      isClothing: true, clothingType: c.type,
    });
  }

  for (const pe of profileEssentials) {
    items.push({
      id: genId(), tripId, dayId: null,
      text: pe.text, category: pe.category ?? null, priority: null,
      checked: false, quantity: null,
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
