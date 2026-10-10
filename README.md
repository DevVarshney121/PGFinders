# PGFinder — Frontend-only website

## Open locally
1. Extract the ZIP.
2. Open the `PGFinder_Complete` folder in VS Code.
3. Run with the VS Code Live Server extension, or use Python from this folder: `python -m http.server 8000`.
4. Open `http://localhost:8000`.

## Pages
- `/` Home
- `/pg` PG listings
- `/hostel` Hostel listings
- `/flat` Flat listings
- `/property?id=pg-001` property detail
- `/about`, `/contact`, `/gallery`, `/saved`, `/manage`

Use a static host with SPA fallback/rewrites for clean routes. For Vercel, `vercel.json` is included.

## Add or remove listings
- Easiest: open `/manage`, use Add Listing / Edit / Remove. These changes are stored only in that browser.
- To publish for all visitors, edit `js/data.js`, add/remove a property object, commit and redeploy.
- Every listing should have 4–5 image URLs in `gallery`.
- Public card location is `areaLabel` (example: `Beta 1`).
- `privateLocation` is used only for matching/filtering. The website code does not display it. Do not put exact addresses in `areaLabel`, title, description or image filenames.
- The map is intentionally set to Greater Noida city-level only, not individual property locations.

## Important frontend-only limitations
- There is no backend, login, admin database, or shared live storage. `/manage` is a browser-local editor, not a secure admin panel.
- Contact form submission needs a Formspree endpoint: edit `js/config.js` and set `formspreeEndpoint`. Until then it shows a setup message.
- Book Now opens WhatsApp with a prefilled enquiry. Confirm the number in `js/config.js`.
- Sample listing content and stock photo URLs are placeholders; replace them with verified listing details and photos you have permission to use.
- No React is used. Navigation uses the History API, so internal links change pages without full reload.
- Do not put secrets, personal IDs, or exact resident/property addresses in frontend code. Anything shipped to browsers can be inspected.
