// ============================================================
// single_dice.server.js — Express server for Lab07 (Dice module only)
// ============================================================
//
// HOW IT MEETS LAB07 REQUIREMENTS:
//   • Uses Express.js to serve the client page and handle HTTP requests.
//   • Implements a POST /roll-dices endpoint returning five random dice values.
//   • Optionally supports "held" dice logic so only non-held dice are re-rolled.
//   • Serves public/single_dice.html and dice1.jpg as static assets.
// ============================================================

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Resolve the current directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Enable JSON request parsing
app.use(express.json());

// Serve static files from the /public folder
app.use(express.static(path.join(__dirname, "public")));

/**
 * ============================================================
 * API Endpoint: POST /roll-dices
 * ============================================================
 * PURPOSE:
 *   Always return five random dice values (1–6).
 *   Optionally accepts "held" dice states from the client so that
 *   only non-held dice are re-rolled.
 *
 * Request Body (optional):
 *   {
 *     values?: number[5],   // current dice values
 *     held?: boolean[5]     // true = keep current value
 *   }
 *
 * Response:
 *   {
 *     dice: number[5]       // updated dice values
 *   }
 */
app.post("/roll-dices", (req, res) => {
    let values = Array.isArray(req.body?.values)
        ? req.body.values
        : [1, 1, 1, 1, 1];
    let held = Array.isArray(req.body?.held)
        ? req.body.held
        : [false, false, false, false, false];

    // Ensure arrays are exactly length 5
    if (values.length !== 5) values = [1, 1, 1, 1, 1];
    if (held.length !== 5) held = [false, false, false, false, false];

    // Generate next dice values — re-roll only non-held dice
    const next = values.map((v, i) =>
        held[i] ? v : 1 + Math.floor(Math.random() * 6)
    );

    res.json({ dice: next });
});

/**
 * Start the Express server
 */
app.listen(PORT, () => {
    console.log(`✅ Lab07 server running at http://localhost:${PORT}`);
});