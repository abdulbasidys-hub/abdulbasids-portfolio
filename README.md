# Yusuf Abdulbasid — Portfolio

## Setup

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Add your photo

Place your image as **`public/background.png`**  
It appears on the right side of the homepage, dimmed into the background.

## Pages

| Route      | File                        |
|------------|-----------------------------|
| /          | src/pages/Home.jsx          |
| /about     | src/pages/About.jsx         |
| /work      | src/pages/Work.jsx          |
| /writing   | src/pages/Writing.jsx       |
| /contact   | src/pages/Contact.jsx       |

## Shared components

| Component | File                           |
|-----------|--------------------------------|
| Navbar    | src/components/Navbar.jsx      |
| Footer    | src/components/Footer.jsx      |
| Cursor    | src/components/Cursor.jsx      |

## Design tokens (colors, fonts)

All in `src/index.css` under `:root {}`

## Build for production

```bash
npm run build
```

Output goes to `/dist` — ready for GitHub Pages or any static host.
