# Changelog

## v1.6.0 — 2026-05-26

### Features
- **US / CA Revenue Share tabs** — Revenue Share is now split into two independent sub-tabs (US and CA), each with their own inputs, KPI snapshot, tier table, bar chart, and donut chart
- **Canadian tier payments** — CA tab uses the official CAD amounts from the CIC Canada schedule: $140 / $70 / $35 / $35 / $28 / $35 / $70 per closing per tier
- **Unified header bar** — Title, Revenue Share (US/CA) tabs, and Commission tab are now all in one row on desktop for a cleaner layout
- **Mobile-responsive header** — On small screens the tab row wraps below the title/toggle row so nothing bleeds or overlaps

### Config
- `config.js` `revShare` restructured into `revShare.us` and `revShare.ca` sub-objects, each with independent `tierPayments` and `anqThresholds` arrays
- CA defaults added (`caTier1`–`caTier7`, `caSalesPerYear`)

### Bug Fixes
- Fixed chart rendering artifact on the CA tab — canvas was drawn at zero dimensions while the panel was hidden; charts now redraw correctly when the tab is activated

---

## v1.5.7 and earlier

- Commission comparison calculator (Traditional vs CIC)
- Revenue Share calculator with 7-tier ANQ qualification logic
- Dark / Light mode toggle
- Extracted all formulas and defaults to `config.js` for easy updating
- Responsive grid layout
