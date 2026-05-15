# Trip Planner Astro — Project Context

## Stack
- Astro v5, Vanilla JS, Tailwind CSS v4
- @vite-pwa/astro for PWA
- localStorage for all data persistence
- GitHub Pages for hosting

## Project Structure
- src/pages/ — Astro pages (index, trip, trips, profile, archive)
- src/data/ — Static data (templates.js, countries.js)
- src/utils/ — localStorage helpers (store.js)
- src/layouts/ — Base layout
- src/components/ — Reusable components
- dist/ — Build output (don't edit)

## Key Files
- store.js — ALL localStorage read/write logic, data models
- templates.js — Trip templates and clothing calculation
- trip.astro — Main trip page (packing, itinerary, info, expenses tabs)
- profile.astro — Personal essentials, clothing defaults, global people

## Data Models
- Trip: id, name, origin, destinations[], days[], items[], expenses[], members[], status
- Destination: id, city, country, arrivalDate, departureDate, currency, plugTypes, voltage
- ChecklistItem: id, tripId, text, category, priority, checked, quantity, neededOnDay
- Expense: id, tripId, amount, description, category, paidBy, splitBetween[], date
- ItineraryEvent: id, tripId, dayId, time, title, notes
- UserProfile: personalEssentials[], clothingDefaults, globalPeople[], customCategories[]

## Rules
- Never use a framework — Vanilla JS only
- Never break existing localStorage structure without migrating old data
- Always run npm run build to verify before finishing
- All interactivity via vanilla JS event listeners
- Tailwind for all styling — no custom CSS unless absolutely necessary

## Current Version
v1.5 — international travel features in progress

## What NOT to change
- PWA configuration (vite.config.mjs)
- GitHub Actions workflow (.github/workflows/deploy.yml)
- Base layout (layouts/Base.astro)