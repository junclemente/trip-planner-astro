# Trip Planner Astro — Project Context

## Stack
- Astro v5, Vanilla JS, Tailwind CSS v4
- @vite-pwa/astro for PWA
- localStorage for all data persistence
- GitHub Pages for hosting

## Project Structure
src/
├── data/
│   └── countries.js          — static country lookup (power adapters, currency, visa info)
├── layouts/
│   └── Layout.astro          — base layout (DO NOT MODIFY)
├── pages/
│   ├── trips/
│   │   └── index.astro       — trip dashboard
│   ├── archive.astro         — archived trips
│   ├── index.astro           — welcome screen
│   ├── profile.astro         — personal essentials, clothing defaults, global people
│   └── trip.astro            — main trip page (packing, itinerary, info, expenses tabs)
├── scripts/
│   ├── store.js              — ALL localStorage read/write logic and data models
│   └── templates.js          — trip templates and clothing calculation
├── styles/
│   └── global.css            — global styles (avoid editing, use Tailwind instead)
├── tests/
│   ├── countries.test.js     — 44 tests
│   ├── settlement.test.js    — 17 tests
│   ├── store.test.js         — 35 tests
│   └── templates.test.js     — 45 tests
└── utils/
    └── settlement.js         — debt simplification algorithm (extracted for testability)

## Data Models
- Trip: id, name, origin, destinations[], days[], items[], expenses[], members[], status
- Destination: id, city, country, arrivalDate, departureDate, currency, currencyCode, currencyNotes, plugTypes, voltage
- ChecklistItem: id, tripId, text, category, priority, checked, quantity, neededOnDay
- Expense: id, tripId, amount, description, category, paidBy, splitBetween[], customAmounts{}, date, venueOrNote
- ItineraryEvent: id, tripId, dayId, time, title, notes
- UserProfile: personalEssentials[], clothingDefaults, globalPeople[], customCategories[], customPriorities[]

## Rules
- Never use a framework — Vanilla JS only
- Never break existing localStorage structure without migrating old data
- Always run npm run test:run AND npm run build before finishing
- All interactivity via vanilla JS event listeners
- Tailwind for all styling — avoid editing global.css unless absolutely necessary
- Settlement algorithm lives in src/utils/settlement.js — keep it isolated and testable

## Testing
- Vitest for unit tests
- Run: npm run test:run
- 141 tests across 4 test files in src/tests/
- All tests must pass before build

## Deployment
- GitHub Actions auto-deploys on push to main
- Tests run before build in CI pipeline
- Live URL: https://junclemente.github.io/trip-planner-astro/

## Current Version
v1.1.0

## Known Issues / In Progress
- Destination entered in New Trip modal not being saved to destinations[] array

## What NOT to change
- PWA configuration (vite.config.mjs)
- GitHub Actions workflow (.github/workflows/deploy.yml)
- Base layout (src/layouts/Layout.astro)
- Vitest configuration