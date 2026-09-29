# Spear Hasan — Official Website

A standalone, responsive portfolio/profile site inspired by the dark navy, cyan glow, and card-based layout of [devyasin.online](https://devyasin.online/), rebuilt with Spear Hasan's own profile, social links, and project details.

## Design and behavior

- Fixed, glass-style header with responsive navigation.
- **The only share button is in the header**; on supported browsers it opens native sharing, otherwise it copies the current page URL.
- Dark navy and cyan visual system, responsive layouts, reduced-motion support, and keyboard-accessible controls.
- Local image files in `assets/` for the portrait, cover preview, verification badge, and hero background. No third-party image host is required at runtime.
- Static HTML, CSS, and JavaScript; no build step or external JavaScript dependencies.

## Run locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## GitHub Pages

The intended project-site URL is `https://spearhasan.github.io/spearhasan-portfolio/`. If this repository remains private, public Pages availability depends on the GitHub plan. To publish on GitHub Pages, use the repository's **Settings → Pages** and select the `main` branch and `/ (root)` folder. The Open Graph image tags are set to the intended project URL.

## Image credits

- Hero background: [“Abstract blue digital wave pattern with glowing dots” by jonakoh_ on Unsplash](https://unsplash.com/photos/abstract-blue-digital-wave-pattern-with-glowing-dots-NW_yGSTNOe4), available under the [Unsplash License](https://unsplash.com/license). A local copy is kept in `assets/cyan-digital-wave.jpg` so the site does not depend on the remote image host.
- The profile photo, cover, and historic verification-badge art were copied from the existing Spear Hasan GitHub Pages project for a self-contained repository.
