# Offworld — Louis Alfonso's personal website

A one-page HTML, CSS, and JavaScript website with a sci-fi / Star Wars theme.

## Files

- `index.html` — page structure and personal information
- `style.css` — layout, colors, and animations
- `scifi-fonts.css` — local font definitions
- `script.js` — interactions and sound effects
- `assets/louis-portrait.png` — Louis's photo
- `fonts/` — locally hosted Orbitron and Rajdhani fonts, with their licenses

Keep these files and folders together. No framework, install, server, or API key is required.

## Preview on your computer

Extract the ZIP, then open `index.html` in a browser. Use a recent Chrome, Edge, Firefox, or Safari browser. The site works offline, including the font files and synthesized audio.

## Publish on GitHub Pages

1. Create a GitHub repository for this website.
2. Upload the CONTENTS of this folder to the repository root. `index.html` must be at the root, not inside another folder. Keep `assets/` and `fonts/` intact.
3. Commit your uploaded files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, then choose **main** and **/(root)**. Save.
6. Wait for GitHub Pages to finish deploying, then open the website URL shown on that settings page.

This is a static site: do not upload any `.openai` directory, deployment archives, or credentials. None are included in this ZIP.

## Sound effects

Click **SFX OFF** in the top navigation to enable effects. The button changes to **SFX ON**. Click it again to mute all effects. Audio starts muted and needs a visitor's click because browsers restrict autoplay.

The effects are original procedural sounds made with the Web Audio API, not recordings from the films:

- Hyperspace — rising engine and rushing noise
- Lightsaber — ignition and retraction sweeps
- Holocron — layered chimes
- Crew scanner — sweep and confirmation beeps
- Training remote — deflection burst and completion melody
- Archive droid — short electronic chirps
- Kyber crystals — selection chime
- Receiver — tuning ticks and signal-lock melody
- Other controls — short interface confirmation

There is no continuous background hum. Each effect ends automatically. In `script.js`, search for `master.gain.value = 0.22` to change the overall sound volume. The `soundFX` section contains the sound recipes.

## Interactions to demonstrate

1. Press **Punch it** for the hyperspace jump.
2. Choose destinations on the Galaxy Map.
3. Scan the crew portrait to reveal personal details.
4. Ask the archive droid about Louis.
5. Switch between technical skill modules.
6. Open the holocron; choose a crystal and ignite the saber.
7. Complete five training-remote deflections. Keyboard users can focus the remote and press Enter.
8. Tune to **103.7 MHz** to reveal the personal transmission.
9. Open the Comms Directory to visit Louis’s GitHub or Facebook, compose an email, or copy the Discord username.

All sections remain freely accessible. Reduced-motion preferences disable or reduce animation. No visitor is forced to wait or complete a task to read the page.

## Editing

Edit your introduction and personal details in `index.html`. Update the `logs`, `systems`, and `droidAnswers` records in `script.js` when changing text that appears after an interaction. Keep the element IDs and `data-` attributes consistent with the JavaScript.

Replace `assets/louis-portrait.png` to update the photo, or change its `src` in the HTML. This photo is included in the published site; no visitor upload is needed.

This project uses JavaScript (`.js`), not Java (`.java`).

## Credits

Personal website: Louis Alfonso M. Costanilla.

Orbitron and Rajdhani are distributed under the SIL Open Font License. See the license files in `fonts/`.

An unofficial student fan project inspired by science-fiction interfaces and Star Wars. Not affiliated with Lucasfilm or Electronic Arts.

## Contact channels

GitHub: https://github.com/LouisAlfonsoCostanilla-UCM

Email: costanilla.louis@gmail.com

Facebook: https://www.facebook.com/skullfonso

Discord username: poch0lo

Discord uses a copy button rather than a guessed profile link. If clipboard permissions are unavailable, select and copy the visible username manually.
