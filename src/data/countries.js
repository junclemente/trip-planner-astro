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
  { name: 'Haiti', code: 'HT', currency: 'Haitian Gourde', currencyCode: 'HTG', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Trinidad and Tobago', code: 'TT', currency: 'Trinidad and Tobago Dollar', currencyCode: 'TTD', plugTypes: ['A', 'B'], voltage: '115V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Barbados', code: 'BB', currency: 'Barbadian Dollar', currencyCode: 'BBD', plugTypes: ['A', 'B'], voltage: '115V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 6 months.' } },
  { name: 'Bahamas', code: 'BS', currency: 'Bahamian Dollar', currencyCode: 'BSD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Belize', code: 'BZ', currency: 'Belize Dollar', currencyCode: 'BZD', plugTypes: ['A', 'B', 'G'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Honduras', code: 'HN', currency: 'Honduran Lempira', currencyCode: 'HNL', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (CA-4 region combined with Guatemala, El Salvador, Nicaragua).' } },
  { name: 'El Salvador', code: 'SV', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (CA-4 region combined with Guatemala, Honduras, Nicaragua).' } },
  { name: 'Nicaragua', code: 'NI', currency: 'Nicaraguan Córdoba', currencyCode: 'NIO', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (CA-4 region combined with Guatemala, Honduras, El Salvador).' } },

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
  { name: 'Slovakia', code: 'SK', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Bulgaria', code: 'BG', currency: 'Bulgarian Lev', currencyCode: 'BGN', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Lithuania', code: 'LT', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Latvia', code: 'LV', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Estonia', code: 'EE', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Slovenia', code: 'SI', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Montenegro', code: 'ME', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Albania', code: 'AL', currency: 'Albanian Lek', currencyCode: 'ALL', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'North Macedonia', code: 'MK', currency: 'Macedonian Denar', currencyCode: 'MKD', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Bosnia and Herzegovina', code: 'BA', currency: 'Convertible Mark', currencyCode: 'BAM', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Moldova', code: 'MD', currency: 'Moldovan Leu', currencyCode: 'MDL', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Serbia', code: 'RS', currency: 'Serbian Dinar', currencyCode: 'RSD', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Luxembourg', code: 'LU', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Malta', code: 'MT', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Cyprus', code: 'CY', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Monaco', code: 'MC', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Liechtenstein', code: 'LI', currency: 'Swiss Franc', currencyCode: 'CHF', plugTypes: ['C', 'J'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Andorra', code: 'AD', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'San Marino', code: 'SM', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F', 'L'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Vatican City', code: 'VA', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F', 'L'], voltage: '230V', visaInfo: { US: 'No visa required (Schengen). Maximum 90 days in any 180-day period.' } },
  { name: 'Russia', code: 'RU', currency: 'Russian Ruble', currencyCode: 'RUB', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Ukraine', code: 'UA', currency: 'Ukrainian Hryvnia', currencyCode: 'UAH', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Check current US State Department advisories before travel. Entry may be restricted due to ongoing conflict.' } },
  { name: 'Belarus', code: 'BY', currency: 'Belarusian Ruble', currencyCode: 'BYN', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Armenia', code: 'AM', currency: 'Armenian Dram', currencyCode: 'AMD', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 180 days.' } },
  { name: 'Georgia', code: 'GE', currency: 'Georgian Lari', currencyCode: 'GEL', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 365 days.' } },
  { name: 'Azerbaijan', code: 'AZ', currency: 'Azerbaijani Manat', currencyCode: 'AZN', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'e-Visa required — apply at evisa.gov.az. 30-day stay.' } },

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
  { name: 'Pakistan', code: 'PK', currency: 'Pakistani Rupee', currencyCode: 'PKR', plugTypes: ['C', 'D'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Pakistani embassy/consulate.' } },
  { name: 'Bangladesh', code: 'BD', currency: 'Bangladeshi Taka', currencyCode: 'BDT', plugTypes: ['C', 'D', 'G', 'K'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Bangladeshi embassy/consulate.' } },
  { name: 'Iran', code: 'IR', currency: 'Iranian Rial', currencyCode: 'IRR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Check current US State Department advisories before travel. Entry restrictions may apply.' } },
  { name: 'Afghanistan', code: 'AF', currency: 'Afghan Afghani', currencyCode: 'AFN', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'Do not travel. Check current US State Department advisories.' } },
  { name: 'Kazakhstan', code: 'KZ', currency: 'Kazakhstani Tenge', currencyCode: 'KZT', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Uzbekistan', code: 'UZ', currency: 'Uzbekistani Som', currencyCode: 'UZS', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Kyrgyzstan', code: 'KG', currency: 'Kyrgyzstani Som', currencyCode: 'KGS', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 60 days.' } },
  { name: 'Turkmenistan', code: 'TM', currency: 'Turkmen Manat', currencyCode: 'TMT', plugTypes: ['B', 'C', 'F'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Transit visa available.' } },
  { name: 'Tajikistan', code: 'TJ', currency: 'Tajikistani Somoni', currencyCode: 'TJS', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. e-Visa available at evisa.tj.' } },
  { name: 'Mongolia', code: 'MN', currency: 'Mongolian Tugrik', currencyCode: 'MNT', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'North Korea', code: 'KP', currency: 'North Korean Won', currencyCode: 'KPW', plugTypes: ['A', 'C', 'F'], voltage: '220V', visaInfo: { US: 'Travel prohibited for US citizens under US law except with special State Department authorization.' } },
  { name: 'Laos', code: 'LA', currency: 'Lao Kip', currencyCode: 'LAK', plugTypes: ['A', 'B', 'C', 'E', 'F'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available at select entry points.' } },
  { name: 'Brunei', code: 'BN', currency: 'Brunei Dollar', currencyCode: 'BND', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Timor-Leste', code: 'TL', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['C', 'E', 'F', 'I'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Bhutan', code: 'BT', currency: 'Bhutanese Ngultrum', currencyCode: 'BTN', plugTypes: ['C', 'D', 'F', 'G', 'M'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Must book through authorized tour operator.' } },

  // Oceania
  { name: 'Australia', code: 'AU', currency: 'Australian Dollar', currencyCode: 'AUD', plugTypes: ['I'], voltage: '230V', visaInfo: { US: 'ETA (subclass 601) required — apply via the Australian ETA app or authorized agents. 3-month stay per visit, up to 12 months total.' } },
  { name: 'New Zealand', code: 'NZ', currency: 'New Zealand Dollar', currencyCode: 'NZD', plugTypes: ['I'], voltage: '230V', visaInfo: { US: 'NZeTA required — apply via NZeTA app or immigration.govt.nz. 90-day stay.' } },
  { name: 'Fiji', code: 'FJ', currency: 'Fijian Dollar', currencyCode: 'FJD', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 120 days.' } },
  { name: 'Papua New Guinea', code: 'PG', currency: 'Papua New Guinean Kina', currencyCode: 'PGK', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'Visa required for US citizens. Apply through PNG embassy/consulate.' } },
  { name: 'Solomon Islands', code: 'SB', currency: 'Solomon Islands Dollar', currencyCode: 'SBD', plugTypes: ['G', 'I'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Vanuatu', code: 'VU', currency: 'Vanuatu Vatu', currencyCode: 'VUV', plugTypes: ['I'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Samoa', code: 'WS', currency: 'Samoan Tālā', currencyCode: 'WST', plugTypes: ['I'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 60 days.' } },
  { name: 'Tonga', code: 'TO', currency: 'Tongan Paʻanga', currencyCode: 'TOP', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 31 days.' } },
  { name: 'Kiribati', code: 'KI', currency: 'Australian Dollar', currencyCode: 'AUD', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'Visa required for US citizens. Apply on arrival.' } },
  { name: 'Micronesia', code: 'FM', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Marshall Islands', code: 'MH', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens.' } },
  { name: 'Palau', code: 'PW', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Nauru', code: 'NR', currency: 'Australian Dollar', currencyCode: 'AUD', plugTypes: ['I'], voltage: '240V', visaInfo: { US: 'Visa required for US citizens. Apply through Nauruan embassy.' } },
  { name: 'Tuvalu', code: 'TV', currency: 'Tuvaluan Dollar', currencyCode: 'TVD', plugTypes: ['I'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },

  // South America
  { name: 'Brazil', code: 'BR', currency: 'Brazilian Real', currencyCode: 'BRL', plugTypes: ['C', 'N'], voltage: '127V', visaInfo: { US: 'eVisa required — apply at viaconect.mre.gov.br. 90-day stay, up to 180 days per year.' } },
  { name: 'Argentina', code: 'AR', currency: 'Argentine Peso', currencyCode: 'ARS', plugTypes: ['C', 'I'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Peru', code: 'PE', currency: 'Peruvian Sol', currencyCode: 'PEN', plugTypes: ['A', 'B', 'C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 183 days.' } },
  { name: 'Colombia', code: 'CO', currency: 'Colombian Peso', currencyCode: 'COP', plugTypes: ['A', 'B'], voltage: '110V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days (extendable).' } },
  { name: 'Chile', code: 'CL', currency: 'Chilean Peso', currencyCode: 'CLP', plugTypes: ['C', 'L'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Ecuador', code: 'EC', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Bolivia', code: 'BO', currency: 'Boliviano', currencyCode: 'BOB', plugTypes: ['A', 'C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Uruguay', code: 'UY', currency: 'Uruguayan Peso', currencyCode: 'UYU', plugTypes: ['C', 'F', 'L'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Paraguay', code: 'PY', currency: 'Paraguayan Guaraní', currencyCode: 'PYG', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Venezuela', code: 'VE', currency: 'Venezuelan Bolívar', currencyCode: 'VES', plugTypes: ['A', 'B'], voltage: '120V', visaInfo: { US: 'Check current US State Department advisories before travel. Entry restrictions may apply.' } },
  { name: 'Guyana', code: 'GY', currency: 'Guyanese Dollar', currencyCode: 'GYD', plugTypes: ['A', 'B', 'D', 'G'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Suriname', code: 'SR', currency: 'Surinamese Dollar', currencyCode: 'SRD', plugTypes: ['A', 'B', 'C', 'F'], voltage: '127V', visaInfo: { US: 'Visa required for US citizens. Apply through Surinamese embassy/consulate.' } },

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

  // Additional Middle East
  { name: 'Kuwait', code: 'KW', currency: 'Kuwaiti Dinar', currencyCode: 'KWD', plugTypes: ['C', 'G'], voltage: '240V', visaInfo: { US: 'Visa required for US citizens. Apply through Kuwaiti embassy or eVisa.' } },
  { name: 'Bahrain', code: 'BH', currency: 'Bahraini Dinar', currencyCode: 'BHD', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'eVisa or visa on arrival available for US citizens.' } },
  { name: 'Oman', code: 'OM', currency: 'Omani Rial', currencyCode: 'OMR', plugTypes: ['C', 'G'], voltage: '240V', visaInfo: { US: 'eVisa required for US citizens — apply at evisa.rop.gov.om.' } },
  { name: 'Lebanon', code: 'LB', currency: 'Lebanese Pound', currencyCode: 'LBP', plugTypes: ['A', 'B', 'C', 'D', 'G'], voltage: '220V', visaInfo: { US: 'Visa on arrival available for US citizens.' } },
  { name: 'Syria', code: 'SY', currency: 'Syrian Pound', currencyCode: 'SYP', plugTypes: ['C', 'E', 'L'], voltage: '220V', visaInfo: { US: 'Do not travel. Check current US State Department advisories.' } },
  { name: 'Iraq', code: 'IQ', currency: 'Iraqi Dinar', currencyCode: 'IQD', plugTypes: ['C', 'D', 'G'], voltage: '230V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Yemen', code: 'YE', currency: 'Yemeni Rial', currencyCode: 'YER', plugTypes: ['A', 'D', 'G'], voltage: '230V', visaInfo: { US: 'Do not travel. Check current US State Department advisories.' } },
  { name: 'Palestine', code: 'PS', currency: 'Israeli New Shekel', currencyCode: 'ILS', plugTypes: ['C', 'H'], voltage: '230V', visaInfo: { US: 'Entry through Israel/Jordan. Check current travel advisories.' } },

  // Additional Africa
  { name: 'Nigeria', code: 'NG', currency: 'Nigerian Naira', currencyCode: 'NGN', plugTypes: ['D', 'G'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Nigerian embassy/consulate.' } },
  { name: 'Ethiopia', code: 'ET', currency: 'Ethiopian Birr', currencyCode: 'ETB', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'eVisa available at evisa.gov.et or visa on arrival.' } },
  { name: 'Algeria', code: 'DZ', currency: 'Algerian Dinar', currencyCode: 'DZD', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Algerian embassy/consulate.' } },
  { name: 'Sudan', code: 'SD', currency: 'Sudanese Pound', currencyCode: 'SDG', plugTypes: ['C', 'D'], voltage: '230V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Ghana', code: 'GH', currency: 'Ghanaian Cedi', currencyCode: 'GHS', plugTypes: ['D', 'G'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Ghanaian embassy or online.' } },
  { name: 'Mozambique', code: 'MZ', currency: 'Mozambican Metical', currencyCode: 'MZN', plugTypes: ['C', 'F', 'M'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available at some entry points.' } },
  { name: 'Cameroon', code: 'CM', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Cameroonian embassy/consulate.' } },
  { name: 'Ivory Coast', code: 'CI', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'eVisa required for US citizens — apply at evisa.gouv.ci.' } },
  { name: 'Madagascar', code: 'MG', currency: 'Malagasy Ariary', currencyCode: 'MGA', plugTypes: ['C', 'D', 'E', 'J', 'K'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Niger', code: 'NE', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['A', 'B', 'C', 'D', 'F'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Niger embassy/consulate.' } },
  { name: 'Burkina Faso', code: 'BF', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Check current US State Department advisories.' } },
  { name: 'Mali', code: 'ML', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Check current US State Department advisories.' } },
  { name: 'Zambia', code: 'ZM', currency: 'Zambian Kwacha', currencyCode: 'ZMW', plugTypes: ['C', 'D', 'G'], voltage: '230V', visaInfo: { US: 'eVisa required for US citizens — apply at evisa.zambiaimmigration.gov.zm.' } },
  { name: 'Zimbabwe', code: 'ZW', currency: 'US Dollar', currencyCode: 'USD', plugTypes: ['D', 'G'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Senegal', code: 'SN', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C', 'D', 'E', 'K'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Tunisia', code: 'TN', currency: 'Tunisian Dinar', currencyCode: 'TND', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Rwanda', code: 'RW', currency: 'Rwandan Franc', currencyCode: 'RWF', plugTypes: ['C', 'J'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Burundi', code: 'BI', currency: 'Burundian Franc', currencyCode: 'BIF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Burundian embassy/consulate.' } },
  { name: 'Benin', code: 'BJ', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'eVisa required for US citizens — apply at evisa.gouv.bj.' } },
  { name: 'Togo', code: 'TG', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'eVisa required for US citizens — apply at voyage.gouv.tg.' } },
  { name: 'Libya', code: 'LY', currency: 'Libyan Dinar', currencyCode: 'LYD', plugTypes: ['C', 'D', 'F'], voltage: '127V', visaInfo: { US: 'Do not travel. Check current US State Department advisories.' } },
  { name: 'Sierra Leone', code: 'SL', currency: 'Sierra Leonean Leone', currencyCode: 'SLL', plugTypes: ['D', 'G'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Sierra Leone embassy/consulate.' } },
  { name: 'Eritrea', code: 'ER', currency: 'Eritrean Nakfa', currencyCode: 'ERN', plugTypes: ['C', 'L'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Eritrean embassy/consulate.' } },
  { name: 'Djibouti', code: 'DJ', currency: 'Djiboutian Franc', currencyCode: 'DJF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Somalia', code: 'SO', currency: 'Somali Shilling', currencyCode: 'SOS', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'Do not travel. Check current US State Department advisories.' } },
  { name: 'Central African Republic', code: 'CF', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Republic of the Congo', code: 'CG', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C', 'E'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply through Republic of Congo embassy/consulate.' } },
  { name: 'Democratic Republic of Congo', code: 'CD', currency: 'Congolese Franc', currencyCode: 'CDF', plugTypes: ['C', 'D', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Check current US State Department advisories.' } },
  { name: 'Angola', code: 'AO', currency: 'Angolan Kwanza', currencyCode: 'AOA', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Angolan embassy/consulate.' } },
  { name: 'Namibia', code: 'NA', currency: 'Namibian Dollar', currencyCode: 'NAD', plugTypes: ['D', 'M'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Botswana', code: 'BW', currency: 'Botswanan Pula', currencyCode: 'BWP', plugTypes: ['D', 'G', 'M'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Lesotho', code: 'LS', currency: 'Lesotho Loti', currencyCode: 'LSL', plugTypes: ['M'], voltage: '220V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Eswatini', code: 'SZ', currency: 'Swazi Lilangeni', currencyCode: 'SZL', plugTypes: ['M'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 30 days.' } },
  { name: 'Malawi', code: 'MW', currency: 'Malawian Kwacha', currencyCode: 'MWK', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Uganda', code: 'UG', currency: 'Ugandan Shilling', currencyCode: 'UGX', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'Visa required for US citizens. e-Visa available at visas.immigration.go.ug.' } },
  { name: 'South Sudan', code: 'SS', currency: 'South Sudanese Pound', currencyCode: 'SSP', plugTypes: ['C', 'D'], voltage: '230V', visaInfo: { US: 'Visa required. Check current US State Department advisories before travel.' } },
  { name: 'Chad', code: 'TD', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C', 'D', 'E', 'F'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Chad embassy/consulate.' } },
  { name: 'Mauritania', code: 'MR', currency: 'Mauritanian Ouguiya', currencyCode: 'MRU', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Gambia', code: 'GM', currency: 'Gambian Dalasi', currencyCode: 'GMD', plugTypes: ['G'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Guinea-Bissau', code: 'GW', currency: 'West African CFA Franc', currencyCode: 'XOF', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Guinea-Bissau embassy/consulate.' } },
  { name: 'Guinea', code: 'GN', currency: 'Guinean Franc', currencyCode: 'GNF', plugTypes: ['C', 'F', 'K'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Guinea embassy/consulate.' } },
  { name: 'Liberia', code: 'LR', currency: 'Liberian Dollar', currencyCode: 'LRD', plugTypes: ['A', 'B', 'C', 'E', 'F'], voltage: '120V', visaInfo: { US: 'Visa required for US citizens. Apply through Liberian embassy/consulate.' } },
  { name: 'Gabon', code: 'GA', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'eVisa required for US citizens — apply at evisa.dgdi.ga.' } },
  { name: 'Equatorial Guinea', code: 'GQ', currency: 'Central African CFA Franc', currencyCode: 'XAF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Apply through Equatorial Guinea embassy/consulate.' } },
  { name: 'Comoros', code: 'KM', currency: 'Comorian Franc', currencyCode: 'KMF', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Visa on arrival available for US citizens.' } },
  { name: 'Cape Verde', code: 'CV', currency: 'Cape Verdean Escudo', currencyCode: 'CVE', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Visa required for US citizens. Apply online at ease.gov.cv.' } },
  { name: 'São Tomé and Príncipe', code: 'ST', currency: 'São Tomé and Príncipe Dobra', currencyCode: 'STN', plugTypes: ['C', 'F'], voltage: '220V', visaInfo: { US: 'Visa required for US citizens. Visa on arrival available.' } },
  { name: 'Seychelles', code: 'SC', currency: 'Seychellois Rupee', currencyCode: 'SCR', plugTypes: ['G'], voltage: '240V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Mauritius', code: 'MU', currency: 'Mauritian Rupee', currencyCode: 'MUR', plugTypes: ['C', 'G'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },

  // Final additions to reach ~195 countries
  { name: 'Western Sahara', code: 'EH', currency: 'Moroccan Dirham', currencyCode: 'MAD', plugTypes: ['C', 'E'], voltage: '220V', visaInfo: { US: 'Travel restrictions apply. Territory disputed between Morocco and Sahrawi Arab Democratic Republic.' } },
  { name: 'Kosovo', code: 'XK', currency: 'Euro', currencyCode: 'EUR', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'No visa required for US citizens. Maximum stay 90 days.' } },
  { name: 'Somaliland', code: 'XS', currency: 'Somaliland Shilling', currencyCode: 'SLS', plugTypes: ['C'], voltage: '220V', visaInfo: { US: 'Limited international recognition. Check current travel advisories.' } },
  { name: 'Northern Cyprus', code: 'XN', currency: 'Turkish Lira', currencyCode: 'TRY', plugTypes: ['C', 'F'], voltage: '230V', visaInfo: { US: 'Limited international recognition. Entry typically through Turkey.' } },
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
