# Volkot Labs — Landing Page

The public source for **[volkotlabs.com](https://volkotlabs.com)** — our company landing page.

Volkot Labs is a cloud & DevOps engineering consultancy. We design, build, and operate cloud infrastructure, CI/CD pipelines, and platform tooling for teams that need things done right.

---

## Stack

- **React 19** + **Vite** — fast builds, instant HMR
- **Lucide React** — clean SVG icon set
- **Pure CSS** — no UI framework, all custom styles with CSS variables
- **GitHub Actions** — automated build & deploy to GitHub Pages

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview
```

Output lands in `dist/`.

## Deployment

Pushes to `master` automatically trigger the GitHub Actions workflow, which builds the site and deploys it to GitHub Pages at [volkotlabs.com](https://volkotlabs.com).

---

Curious about how it's built? Feel free to poke around. If something catches your eye or you spot a bug, open an issue — we're always happy to hear from fellow engineers.
