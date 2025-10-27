// dice.js — encapsulate rolling dice
export class DiceSet {
    /**
     * @param {number} count number of dice (default 5 for Yatzy)
     */
    constructor(count = 5) {
        this.count  = count;
        this.values = Array(count).fill(1);     // current faces
        this.held   = Array(count).fill(false); // held mask
    }

    /** Roll all non-held dice; returns the new values. */
    roll() {
        for (let i = 0; i < this.count; i++) {
            if (!this.held[i]) this.values[i] = 1 + Math.floor(Math.random() * 6);
        }
        return [...this.values];
    }

    /** Toggle hold state for a die at index (0-based). */
    toggleHold(index) {
        if (index < 0 || index >= this.count) return;
        this.held[index] = !this.held[index];
    }

    /** Explicitly set hold state (0-based). */
    setHeld(index, isHeld) {
        if (index < 0 || index >= this.count) return;
        this.held[index] = !!isHeld;
    }

    /** Clear all holds. */
    clearHolds() {
        this.held.fill(false);
    }

    /** Reset dice to 1s and clear holds. */
    reset() {
        this.values.fill(1);
        this.held.fill(false);
    }

    /** Read-only snapshot for UI/debug. */
    getState() {
        return { values: [...this.values], held: [...this.held] };
    }
}