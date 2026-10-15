# II&M site (`iim-site`)

Next.js App Router site for the Initiative on Islam & Medicine.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Structure

- `app/` — pages and `globals.css`
- `components/` — `Header.js`, `Footer.js`, shared UI
- `public/images/` — logo and page assets

## Routes

`/`, `/about`, `/mission`, `/team`, `/impact`, `/education`, `/courses`, `/bioscience`, `/curriculum`, `/consultation`, `/speaking`, `/research`, `/resources`, `/books`, `/workshops`, `/podcast`, `/donate`

## Notes

- Brand color: `#800000`
- Site logo: `/images/logo.png` (header + footer)
- Page CSS is consolidated in `app/globals.css`
