# Katika Fayaz • Portfolio

A clean React (CRA) + Tailwind CSS portfolio rebuilt from recovered files.

## Quickstart

- Node.js 18+
- npm 9+

```bash
npm install
npm start
```

The app runs at http://localhost:3000

## Project Structure

- public/
  - index.html
  - assets/ (icons, images)
- src/
  - components/ (sections and UI primitives)
  - pages/
  - App.jsx
  - index.js
  - index.css

## Tech

- React 18, CRA
- Tailwind CSS 3
- lucide-react icons
- (Optional) Framer Motion ready

## Assets

- Move your saved webpage images/icons into `public/assets/`.
- Update any local references in components to use `/assets/...`.
- A previous folder named `public/assests` was detected; please rename it to `assets` or move files accordingly.

## Animations

- Subtle CSS-based animations are included (fade-in, float).
- You can add Framer Motion later if desired.

## Assumptions

- Chose the "New" variants for Hero and About.
- Replaced shadcn/ui components with lightweight Tailwind components.
- Implemented a minimal `toast` using `window.alert`.
- No backend wiring; the contact form simulates submission.

## Deploy

- Build: `npm run build`
- Deploy the `build/` folder to Netlify/Vercel/Static hosting.
