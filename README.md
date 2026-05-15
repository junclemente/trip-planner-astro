# ✈️ Trip Planner

A personal travel trip planner PWA built with Astro and Vanilla JS.

![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat&logo=astro&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

## 🌐 Live App

👉 [https://junclemente.github.io/trip-planner-astro/](https://junclemente.github.io/trip-planner-astro/)

---

## 📖 Overview

Trip Planner is a lightweight, installable progressive web app (PWA) for planning personal and group travel. No account required — everything is stored locally on your device. Built for travelers who want a simple, fast, and privacy-friendly way to organize packing lists, itineraries, and group expenses.

---

## ✨ Features

### 🏠 Welcome Screen
- Clean onboarding screen on every launch
- Quick access to create a new trip, view existing trips, or import a trip

### 🗂️ Duration-Based Trip Templates
- **Overnight** (1 night)
- **Weekend** (2 nights)
- **Short Trip** (3 nights)
- **Week Trip** (7 nights)
- Auto-calculates clothing quantities based on trip length with user overrides

### 🧳 Packing List
- Flat list — no day grouping
- Two-tag system: **Category** (Toiletries, Clothing, Flight, Concert, Hotel, Activity) + **Priority** (Essential, Optional, Don't Forget)
- Filterable by category and priority
- Inline quantity adjusters for clothing items
- Optional "Needed on Day" field per item
- User-created custom categories and priorities

### 🗓️ Itinerary
- Day-by-day schedule with time, title, and notes per event
- Auto-suggest itinerary events from flight and hotel info entered in Info tab
- Add, edit, and delete events per day

### ℹ️ Info Tab
- **Trip Basics** — name, destination, origin, dates, notes
- **Flight Details** — outbound and return airline, flight number, departure/arrival times
- **Hotel Details** — name, address, check-in/out, notes
- **Transport** — getting there and back with notes
- **Trip Actions** — export, duplicate, archive, delete

### 💸 Expense Splitter
- Add expenses with description, amount, category, date, and venue
- Select who paid and who's included in the split
- Equal split by default with custom amount option per person
- Debt settlement algorithm — calculates minimum transactions to square up
- Mark settlements as paid
- Filter expenses by category or person

### 📦 Archive
- Archive completed trips as frozen read-only snapshots
- Restore archived trips to active
- Full export/import of trips as JSON

### 👤 Profile
- **Personal Essentials** — add items auto-included in every new trip
- **Recommended Defaults** — suggested essentials you can add with one tap
- **Clothing Defaults** — set extra quantities applied to every new trip
- **Global People List** — reusable list of travel companions across trips
- **Custom Categories & Priorities** — create your own tags for packing items

### 📱 PWA — Installable on Mobile
- Install on iOS via Safari → Share → Add to Home Screen
- Install on Android via Chrome → Menu → Add to Home Screen
- Offline capable via service worker
- No account required — all data stored in localStorage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Astro v5](https://astro.build) | Static site framework |
| Vanilla JS | UI interactivity (no framework) |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [@vite-pwa/astro](https://vite-pwa-org.netlify.app) | PWA, service worker, manifest |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- npm

### Local Development

```bash
# Clone the repo
git clone https://github.com/junclemente/trip-planner-astro.git
cd trip-planner-astro

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## 🚢 Deployment

Deployment is automatic via GitHub Actions on every push to `main`. The workflow builds the Astro project and deploys the `dist/` folder to GitHub Pages.

To deploy manually, upload the contents of `dist/` to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).

---

## 🗺️ Roadmap

- **v2.0** — Supabase integration, user accounts, cloud sync across devices
- **v2.1** — Multi-user collaboration, shared itinerary and expenses, opt-in travel detail sharing
- **v2.2** — International trip features, multiple destinations per trip
- **v3.0** — Native mobile app

---

## 🤝 Contributing

This is a personal project but issues and suggestions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

---

## 🤖 AI Acknowledgement

This project was built with significant assistance from AI tools:

- **[Claude](https://claude.ai) by Anthropic** — project planning, feature design, architecture decisions, and code generation via [Claude Code](https://claude.ai/code)
- **Development approach** — built using AI-assisted development, where features were designed collaboratively and implemented through Claude Code. All product decisions, architecture, and design direction were made by the author.

---

## 👤 Author

**junclemente**
- GitHub: [@junclemente](https://github.com/junclemente)
- Website: [junclemente.com](https://junclemente.com)