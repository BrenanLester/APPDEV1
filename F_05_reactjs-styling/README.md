# F_05_reactjs-styling

A Vite + React JavaScript implementation of the supplied botanical login screenshot. No Git commands were run.

## Run

1. Extract `F_05_reactjs-styling` into your existing `appdev1` repository.
2. Open a terminal inside `appdev1/F_05_reactjs-styling`.
3. Install dependencies with `npm ci` (requires Node.js 22.12+ or a compatible newer LTS).
4. Run `npm run dev` and open the local URL printed in the terminal.
5. To check the production build, run `npm run build`, then `npm run preview`.

## Styling structure

- `src/styles/tokens.css`: reusable color, typography, spacing, size, and radius custom properties under `:root`.
- `src/index.css`: global reset, document defaults, inherited form fonts, and focus indicators. Imported once in `src/main.jsx`.
- `src/components/LoginPage.module.css`: scoped layout, form, navigation, and social button rules with responsive breakpoints.
- `src/components/LoginPage.jsx`: semantic React markup, accessible input labels, icons, and local preview interactions. Imports module classes through `styles`.
- `src/App.jsx`: composes the page.

No previous lesson stylesheets were used. The lesson PPTX was not provided, so its exact contents could not be checked. The screenshot supplies visual guidance; precise Figma typography and spacing were estimated. The magenta selection outline around the artwork was omitted. The decorative image was cropped from the user-provided screenshot; its original rights remain with its owner. Google/Facebook icons are inline SVGs. All rendering assets are local.

## Preview behavior

Email and password use native required/email validation. Form submission displays a frontend-only notice; it does not store or send credentials. Google, Facebook, and SignUp display honest notices because no authentication backend or signup design was supplied. These notices are empty in the initial reference view.

## Required assignment screenshot — finish on Windows

The included page-only preview is NOT the required browser-plus-Notepad screenshot. This environment cannot operate your Windows desktop or Notepad.

1. Open `submission-details.txt` in Notepad and replace all bracketed fields with your details and the actual capture date/time.
2. Open the running login page in your browser.
3. Place both windows side by side so the page and all five Notepad fields are readable.
4. Press Windows + Shift + S and capture both windows in one image.
5. Save that screenshot directly in this project root as `YOUR-LASTNAME-reactjs-styling.png`, replacing `YOUR-LASTNAME` with your surname.

No surname is assumed. Git staging, commits, and pushes are omitted as requested.
