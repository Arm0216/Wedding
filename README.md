# Arman & Nelly — Wedding Website

A luxury single-page wedding website built with React, TypeScript, Tailwind CSS, and Vite.  
Features: hero video background, love letter, photo gallery, wedding day timeline, music player, and Armenian/English language toggle.

---

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

---

### macOS

```bash
# 1. Clone the repository
git clone https://github.com/Arm0216/Wedding.git
cd Wedding

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

### Windows

Open **PowerShell** or **Command Prompt**:

```powershell
# 1. Clone the repository
git clone https://github.com/Arm0216/Wedding.git
cd Wedding

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder. You can deploy it to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

```
src/
  components/       # React components (Hero, Gallery, Timeline, etc.)
  context/          # Language context (EN / HY toggle)
  data/             # Wedding data (couple info, gallery images, timeline)
  hooks/            # Custom hooks (scroll animation)
  i18n/             # Armenian and English translations
public/
  images/           # Photos and hero video
```

---

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
