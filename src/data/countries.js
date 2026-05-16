export const COUNTRIES = [
  // North America
  { name: 'United States', code: 'US', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required — US citizens.' } },
  { name: 'Canada', code: 'CA', currency: 'Canadian Dollar', currencyCode: 'CAD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required. eTA required if flying in — apply at canada.ca. 6-month maximum stay.' } },
  { name: 'Mexico', code: 'MX', currency: 'Mexican Peso', currencyCode: 'MXN', plugTypes: ['A', 'B'], voltage: '127V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 180 days.' } },
  { name: 'Cuba', code: 'CU', currency: 'Cuban Peso', currencyCode: 'CUP', plugTypes: ['A', 'B', 'C'], voltage: '110V', visaInfo: { US: 'Tourist card required. US citizens must travel under one of 12 authorized categories (not "tourism"). Consult current OFAC regulations.' } },
  { name: 'Dominican Republic', code: 'DO', currency: 'Dominican Peso', currencyCode: 'DOP', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Tourist card fee ($10) included in most flights.' } },
  { name: 'Jamaica', code: 'JM', currency: 'Jamaican Dollar', currencyCode: 'JMD', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Costa Rica', code: 'CR', currency: 'Costa Rican Colón', currencyCode: 'CRC', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Guatemala', code: 'GT', currency: 'Guatemalan Quetzal', currencyCode: 'GTQ', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (CA-4 region combined with Honduras, El Salvador, Nicaragua).' } },
  { name: 'Panama', code: 'PA', currency: 'US Dollar / Balboa', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },

  // Europe
  { name: 'United Kingdom', code: 'GB', currency: 'British Pound', currencyCode: 'GBP', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 6 months.' } },
  { name: 'Ireland', code: 'IE', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'France', code: 'FR', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Germany', code: 'DE', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Italy', code: 'IT', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F', 'L'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Spain', code: 'ES', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Netherlands', code: 'NL', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Switzerland', code: 'CH', currency: 'Swiss Franc', currencyCode: 'CHF', plugTypes: ['C', 'J'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Austria', code: 'AT', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Belgium', code: 'BE', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Portugal', code: 'PT', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Greece', code: 'GR', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Denmark', code: 'DK', currency: 'Danish Krone', currencyCode: 'DKK', plugTypes: ['C', 'F', 'K'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Sweden', code: 'SE', currency: 'Swedish Krona', currencyCode: 'SEK', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Norway', code: 'NO', currency: 'Norwegian Krone', currencyCode: 'NOK', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen/EEA). Maximum 90 days in any 180-day period.' } },
  { name: 'Finland', code: 'FI', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Czech Republic', code: 'CZ', currency: 'Czech Koruna', currencyCode: 'CZK', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Poland', code: 'PL', currency: 'Polish Złoty', currencyCode: 'PLN', plugTypes: ['C', 'E', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Hungary', code: 'HU', currency: 'Hungarian Forint', currencyCode: 'HUF', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Croatia', code: 'HR', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Romania', code: 'RO', currency: 'Romanian Leu', currencyCode: 'RON', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Iceland', code: 'IS', currency: 'Icelandic Króna', currencyCode: 'ISK', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },

  // Asia
  { name: 'Japan', code: 'JP', currency: 'Japanese Yen', currencyCode: 'JPY', plugTypes: ['A', 'B'], voltage: '100V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days. Visit Japan Web registration recommended but not required.' } },
  { name: 'South Korea', code: 'KR', currency: 'Korean Won', currencyCode: 'KRW', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'K-ETA required — apply online at eta.go.kr before departure. No visa required for stays under 90 days.' } },
  { name: 'China', code: 'CN', currency: 'Chinese Yuan', currencyCode: 'CNY', plugTypes: ['A', 'C', 'I'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Chinese embassy/consulate. 144-hour transit visa-free at select airports.' } },
  { name: 'Hong Kong', code: 'HK', currency: 'Hong Kong Dollar', currencyCode: 'HKD', plugTypes: ['G'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Taiwan', code: 'TW', currency: 'New Taiwan Dollar', currencyCode: 'TWD', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Thailand', code: 'TH', currency: 'Thai Baht', currencyCode: 'THB', plugTypes: ['A', 'B', 'C'], voltage: '220V', visaInfo: { US: 'Visa-exempt for US citizens. Maximum stay 60 days (extendable once for 30 days).' } },
  { name: 'Vietnam', code: 'VN', currency: 'Vietnamese Dong', currencyCode: 'VND', plugTypes: ['A', 'C', 'F'], voltage: '220V', visaInfo: { US: 'E-visa required — apply at evisa.xuatnhapcanh.gov.vn. 90-day single/multiple-entry available.' } },
  { name: 'Philippines', code: 'PH', currency: 'Philippine Peso', currencyCode: 'PHP', plugTypes: ['A', 'B', 'C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days (extendable).' } },
  { name: 'Indonesia', code: 'ID', currency: 'Indonesian Rupiah', currencyCode: 'IDR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Visa on arrival at major airports. 30-day stay, extendable once.' } },
  { name: 'Singapore', code: 'SG', currency: 'Singapore Dollar', currencyCode: 'SGD', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Malaysia', code: 'MY', currency: 'Malaysian Ringgit', currencyCode: 'MYR', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Cambodia', code: 'KH', currency: 'Cambodian Riel', currencyCode: 'KHR', plugTypes: ['A', 'C', 'G'], voltage: '230V', visaInfo: { US: 'e-Visa available at evisa.gov.kh. Visa on arrival also available at major border crossings. 30-day stay.' } },
  { name: 'Myanmar', code: 'MM', currency: 'Burmese Kyat', currencyCode: 'MMK', plugTypes: ['C', 'D', 'G'], voltage: '230V', visaInfo: { US: 'Check current US State Department advisories before travel. e-Visa available for some travelers.' } },
  { name: 'India', code: 'IN', currency: 'Indian Rupee', currencyCode: 'INR', plugTypes: ['C', 'D', 'M'], voltage: '230V', visaInfo: { US: 'e-Visa required — apply at indianvisaonline.gov.in. Tourist e-Visa available for 30, 90, or 365 days.' } },
  { name: 'Nepal', code: 'NP', currency: 'Nepali Rupee', currencyCode: 'NPR', plugTypes: ['C', 'D', 'M'], voltage: '230V', visaInfo: { US: 'Visa on arrival or e-Visa required. Tourist visa available for 15, 30, or 90 days.' } },
  { name: 'Sri Lanka', code: 'LK', currency: 'Sri Lankan Rupee', currencyCode: 'LKR', plugTypes: ['D', 'G', 'M'], voltage: '230V', visaInfo: { US: 'ETA required — apply at eta.gov.lk. 30-day stay, extendable.' } },
  { name: 'Maldives', code: 'MV', currency: 'Maldivian Rufiyaa', currencyCode: 'MVR', plugTypes: ['D', 'G', 'J', 'K', 'L'], voltage: '230V', visaInfo: { US: 'No visa required. Free 30-day visa on arrival for US citizens.' } },

  // Oceania
  { name: 'Australia', code: 'AU', currency: 'Australian Dollar', currencyCode: 'AUD', plugTypes: ['I'], voltage: '230V', visaInfo: { US: 'ETA (subclass 601) required — apply via the Australian ETA app or authorized agents. 3-month stay per visit, up to 12 months total.' } },
  { name: 'New Zealand', code: 'NZ', currency: 'New Zealand Dollar', currencyCode: 'NZD', plugTypes: ['I'], voltage: '230V', visaInfo: { US: 'NZeTA required — apply via NZeTA app or immigration.govt.nz. 90-day stay.' } },
  { name: 'Fiji', code: 'FJ', currency: 'Fijian Dollar', currencyCode: 'FJD', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 120 days.' } },

  // South America
  { name: 'Brazil', code: 'BR', currency: 'Brazilian Real', currencyCode: 'BRL', plugTypes: ['C', 'N'], voltage: '127V', visaInfo: { US: 'eVisa required — apply at viaconect.mre.gov.br. 90-day stay, up to 180 days per year.' } },
  { name: 'Argentina', code: 'AR', currency: 'Argentine Peso', currencyCode: 'ARS', plugTypes: ['C', 'I'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Peru', code: 'PE', currency: 'Peruvian Sol', currencyCode: 'PEN', plugTypes: ['A', 'B', 'C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 183 days.' } },
  { name: 'Colombia', code: 'CO', currency: 'Colombian Peso', currencyCode: 'COP', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (extendable).' } },
  { name: 'Chile', code: 'CL', currency: 'Chilean Peso', currencyCode: 'CLP', plugTypes: ['C', 'L'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Ecuador', code: 'EC', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Bolivia', code: 'BO', currency: 'Boliviano', currencyCode: 'BOB', plugTypes: ['A', 'C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },

  // Middle East & Africa
  { name: 'United Arab Emirates', code: 'AE', currency: 'UAE Dirham', currencyCode: 'AED', plugTypes: ['C', 'G'], voltage: '220V', visaInfo: { US: 'Visa on arrival for US citizens. 30-day stay, extendable once.' } },
  { name: 'Israel', code: 'IL', currency: 'Israeli New Shekel', currencyCode: 'ILS', plugTypes: ['C', 'H'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Jordan', code: 'JO', currency: 'Jordanian Dinar', currencyCode: 'JOD', plugTypes: ['B', 'C', 'D', 'F', 'G'], voltage: '230V', visaInfo: { US: 'Visa on arrival at major entry points. Jordan Pass covers visa fee if visiting Petra. 30-day stay.' } },
  { name: 'Turkey', code: 'TR', currency: 'Turkish Lira', currencyCode: 'TRY', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'e-Visa required — apply at evisa.gov.tr. 90-day stay.' } },
  { name: 'Saudi Arabia', code: 'SA', currency: 'Saudi Riyal', currencyCode: 'SAR', plugTypes: ['A', 'B', 'F', 'G'], voltage: '220V', visaInfo: { US: 'Tourist visa available — apply at visa.visitsaudi.com. 90-day stay.' } },
  { name: 'Qatar', code: 'QA', currency: 'Qatari Riyal', currencyCode: 'QAR', plugTypes: ['D', 'G'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Morocco', code: 'MA', currency: 'Moroccan Dirham', currencyCode: 'MAD', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Egypt', code: 'EG', currency: 'Egyptian Pound', currencyCode: 'EGP', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'e-Visa available at visa2egypt.gov.eg, or visa on arrival. 30-day stay.' } },
  { name: 'South Africa', code: 'ZA', currency: 'South African Rand', currencyCode: 'ZAR', plugTypes: ['C', 'M', 'N'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Kenya', code: 'KE', currency: 'Kenyan Shilling', currencyCode: 'KES', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'eVisa required — apply at evisa.go.ke. Single-entry 90-day visa available.' } },
  { name: 'Tanzania', code: 'TZ', currency: 'Tanzanian Shilling', currencyCode: 'TZS', plugTypes: ['D', 'G'], voltage: '230V', visaInfo: { US: 'e-Visa or visa on arrival required — apply at immigration.go.tz.' } },
];

export function getCountry(code) {
  return COUNTRIES.find(c => c.code === code) ?? null;
}

// Returns unique plug types needed beyond what US travelers have (A/B plugs)
export function getNeededPlugTypes(destinations) {
  const US_PLUGS = new Set(['A', 'B']);
  const needed = new Set();
  for (const dest of destinations) {
    if (dest.countryCode === 'US' || dest.countryCode === '') continue;
    for (const plug of (dest.plugTypes ?? [])) {
      if (!US_PLUGS.has(plug)) needed.add(plug);
    }
  }
  return [...needed].sort();
}

// Returns true if any non-US destination uses 220V+
export function needs220VWarning(destinations) {
  return destinations.some(d =>
    d.countryCode !== 'US' && d.countryCode !== '' && parseInt(d.voltage) >= 220
  );
}

// Returns true if any international destination exists (different from home country)
export function hasInternationalDests(destinations, homeCountryCode = 'US') {
  return destinations.some(d => d.countryCode !== homeCountryCode && d.countryCode !== '');
}

// Friendly adapter description per plug type
export const PLUG_DESCRIPTIONS = {
  C: 'Type C (Europe/Asia round 2-pin)',
  D: 'Type D (India round 3-pin)',
  E: 'Type E (France/Belgium round)',
  F: 'Type F (Germany/Europe round w/ ground)',
  G: 'Type G (UK/Hong Kong rectangular 3-pin)',
  H: 'Type H (Israel)',
  I: 'Type I (Australia/NZ angled 3-pin)',
  J: 'Type J (Switzerland)',
  K: 'Type K (Denmark)',
  L: 'Type L (Italy 3-pin)',
  M: 'Type M (India large round 3-pin)',
  N: 'Type N (Brazil)',
};
