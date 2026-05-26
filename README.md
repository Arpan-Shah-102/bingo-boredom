# Bingo Boredom

Live demo: https://arpan-shah-102.github.io/bingo-boredom

A lightweight web app that generates playable 5x5 bingo boards from built-in or custom word banks. Edit boards, import/export JSON, and persist boards in `localStorage`.

## Features
- Multiple default themed word banks (Numbers, Finance, Tech, Animals, Food, Sports, Travel, Music, Space, History, Argument, School, Disappointed Parents, Group Project, Group Chat Drama, etc.)
- Create, rename, delete, and save custom boards
- Import / Export boards as JSON
- Click squares to mark them (center square is Free)
- Responsive board with automatic text fitting per cell
- Persistence via `localStorage`

## Quick Start
1. Open the project in a browser by opening `index.html`.
2. Use the UI:
   - Select a default board from "Load Default Board" and click `Load`.
   - Click `New Board` to generate a randomized board.
   - Click squares to mark them (the center Free square is inactive).
   - Edit the board values in the textarea (one item per line) and click `Update Board` (minimum 24 values).
   - Create a custom board with `+ Board`, then edit and save.
   - Export current board using `Export Current Board`.
   - Import a board JSON file with `Import Board`.

## Files
- `index.html` — main UI
- `style.css` — styles and color variables (CSS variables defined in `:root`)
- `js/utils.js` — data helpers, default banks, localStorage functions (`getDefaultBoards()`, `setDefaultBoards()`, etc.)
- `js/script.js` — app logic, board generation, UI wiring, import/export handlers
- `assets/` — images and favicon

## Data Shape (Import / Export)
Imported/exported board JSON must follow:
```json
{
  "name": "My Board",
  "values": ["item1", "item2", "...", "item24"]
}
```
- `name`: string
- `values`: array atleast 24 items long
