import { describe, it, expect } from 'vitest';
import {
  COUNTRIES,
  getCountry,
  getNeededPlugTypes,
  needs220VWarning,
  hasInternationalDests,
  PLUG_DESCRIPTIONS,
} from '../data/countries.js';

// Helper: build a minimal destination object from a country record
function destFromCountry(country) {
  return {
    countryCode: country.code,
    plugTypes: country.plugTypes,
    voltage: country.voltage,
  };
}

// ── getCountry ────────────────────────────────────────────────────────────────

describe('getCountry', () => {
  it('returns the US entry', () => {
    const c = getCountry('US');
    expect(c).not.toBeNull();
    expect(c.name).toBe('United States');
    expect(c.currencyCode).toBe('USD');
  });

  it('returns null for unknown code', () => {
    expect(getCountry('XX')).toBeNull();
  });

  it('returns Japan with correct voltage', () => {
    const c = getCountry('JP');
    expect(c.voltage).toBe('100V');
    expect(c.currencyCode).toBe('JPY');
  });

  it('returns South Korea with Type C and F plugs', () => {
    const c = getCountry('KR');
    expect(c.plugTypes).toContain('C');
    expect(c.plugTypes).toContain('F');
  });

  it('returns Hong Kong with Type G plug', () => {
    const c = getCountry('HK');
    expect(c.plugTypes).toContain('G');
    expect(c.currencyCode).toBe('HKD');
  });

  it('returns USA with Type A and B plugs', () => {
    const c = getCountry('US');
    expect(c.plugTypes).toEqual(expect.arrayContaining(['A', 'B']));
  });

  it('returns UK with Type G plug', () => {
    const c = getCountry('GB');
    expect(c.plugTypes).toContain('G');
  });

  it('returns Australia with Type I plug', () => {
    const c = getCountry('AU');
    expect(c.plugTypes).toContain('I');
  });

  it('returns France with EUR currency', () => {
    const c = getCountry('FR');
    expect(c.currencyCode).toBe('EUR');
  });

  it('returns voltage as a string with V suffix', () => {
    const c = getCountry('DE');
    expect(c.voltage).toMatch(/^\d+V$/);
  });
});

// ── Voltage identification ────────────────────────────────────────────────────

describe('voltage identification', () => {
  it('USA is 120V', () => expect(getCountry('US').voltage).toBe('120V'));
  it('Japan is 100V', () => expect(getCountry('JP').voltage).toBe('100V'));
  it('UK is 230V', () => expect(getCountry('GB').voltage).toBe('230V'));
  it('South Korea is 220V', () => expect(getCountry('KR').voltage).toBe('220V'));
  it('Hong Kong is 220V', () => expect(getCountry('HK').voltage).toBe('220V'));
  it('Australia is 230V', () => expect(getCountry('AU').voltage).toBe('230V'));
});

// ── getNeededPlugTypes ────────────────────────────────────────────────────────

describe('getNeededPlugTypes', () => {
  it('returns empty for US-only destinations', () => {
    const us = getCountry('US');
    expect(getNeededPlugTypes([destFromCountry(us)])).toEqual([]);
  });

  it('returns empty for destinations with only A/B plugs', () => {
    const jp = getCountry('JP'); // Type A, B
    expect(getNeededPlugTypes([destFromCountry(jp)])).toEqual([]);
  });

  it('returns G for UK destination', () => {
    const gb = getCountry('GB');
    expect(getNeededPlugTypes([destFromCountry(gb)])).toContain('G');
  });

  it('returns C and F for South Korea', () => {
    const kr = getCountry('KR');
    const needed = getNeededPlugTypes([destFromCountry(kr)]);
    expect(needed).toContain('C');
    expect(needed).toContain('F');
  });

  it('deduplicates across multiple destinations', () => {
    const fr = getCountry('FR'); // C, E
    const de = getCountry('DE'); // C, F
    const needed = getNeededPlugTypes([destFromCountry(fr), destFromCountry(de)]);
    const unique = [...new Set(needed)];
    expect(needed.length).toBe(unique.length);
  });

  it('skips empty countryCode destinations', () => {
    const blank = { countryCode: '', plugTypes: ['C', 'F'], voltage: '230V' };
    expect(getNeededPlugTypes([blank])).toEqual([]);
  });

  it('returns sorted array', () => {
    const kr = getCountry('KR');
    const gb = getCountry('GB');
    const needed = getNeededPlugTypes([destFromCountry(kr), destFromCountry(gb)]);
    const sorted = [...needed].sort();
    expect(needed).toEqual(sorted);
  });

  it('returns empty array for empty destinations list', () => {
    expect(getNeededPlugTypes([])).toEqual([]);
  });
});

// ── needs220VWarning ──────────────────────────────────────────────────────────

describe('needs220VWarning', () => {
  it('returns false for US-only', () => {
    expect(needs220VWarning([destFromCountry(getCountry('US'))])).toBe(false);
  });

  it('returns false for Japan (100V)', () => {
    expect(needs220VWarning([destFromCountry(getCountry('JP'))])).toBe(false);
  });

  it('returns true for UK (230V)', () => {
    expect(needs220VWarning([destFromCountry(getCountry('GB'))])).toBe(true);
  });

  it('returns true for South Korea (220V)', () => {
    expect(needs220VWarning([destFromCountry(getCountry('KR'))])).toBe(true);
  });

  it('returns true when mixed — one intl 220V+ destination', () => {
    const dests = [destFromCountry(getCountry('US')), destFromCountry(getCountry('FR'))];
    expect(needs220VWarning(dests)).toBe(true);
  });

  it('returns false for empty list', () => {
    expect(needs220VWarning([])).toBe(false);
  });
});

// ── hasInternationalDests ─────────────────────────────────────────────────────

describe('hasInternationalDests', () => {
  it('returns false for US-only', () => {
    expect(hasInternationalDests([{ countryCode: 'US' }])).toBe(false);
  });

  it('returns false for empty list', () => {
    expect(hasInternationalDests([])).toBe(false);
  });

  it('returns false for blank countryCode', () => {
    expect(hasInternationalDests([{ countryCode: '' }])).toBe(false);
  });

  it('returns true when any non-US destination exists', () => {
    expect(hasInternationalDests([{ countryCode: 'US' }, { countryCode: 'FR' }])).toBe(true);
  });

  it('returns true for single non-US destination', () => {
    expect(hasInternationalDests([{ countryCode: 'JP' }])).toBe(true);
  });
});

// ── PLUG_DESCRIPTIONS ─────────────────────────────────────────────────────────

describe('PLUG_DESCRIPTIONS', () => {
  it('has an entry for Type G', () => {
    expect(PLUG_DESCRIPTIONS['G']).toContain('UK');
  });

  it('has an entry for Type C', () => {
    expect(PLUG_DESCRIPTIONS['C']).toBeTruthy();
  });

  it('covers all plug types used by countries in the list', () => {
    const usedPlugs = new Set(COUNTRIES.flatMap(c => c.plugTypes));
    usedPlugs.forEach(plug => {
      if (!['A', 'B'].includes(plug)) { // A/B are US-standard, not in PLUG_DESCRIPTIONS
        expect(PLUG_DESCRIPTIONS[plug], `Missing description for plug type ${plug}`).toBeTruthy();
      }
    });
  });
});

// ── Data integrity checks ─────────────────────────────────────────────────────

describe('COUNTRIES data integrity', () => {
  it('every country has a code', () => {
    COUNTRIES.forEach(c => expect(c.code).toBeTruthy());
  });

  it('every country has a currencyCode', () => {
    COUNTRIES.forEach(c => expect(c.currencyCode).toBeTruthy());
  });

  it('every country has at least one plug type', () => {
    COUNTRIES.forEach(c => expect(c.plugTypes.length).toBeGreaterThan(0));
  });

  it('every country has a voltage ending in V', () => {
    COUNTRIES.forEach(c => expect(c.voltage).toMatch(/V$/));
  });

  it('all country codes are unique', () => {
    const codes = COUNTRIES.map(c => c.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('has US passport visa info for every country', () => {
    COUNTRIES.forEach(c => expect(c.visaInfo?.US).toBeTruthy());
  });
});
