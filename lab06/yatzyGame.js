import { DiceSet } from './dice.js';
import { YatzyEngine, Categories } from './yatzyEngine.js';

const MAX_ROLLS_PER_TURN = 3;
const MAX_TURNS = 13; // 13 categories in classic Yatzy

export class YatzyGame {
    constructor() {
        this.dice = new DiceSet(5);
        this.engine = new YatzyEngine();
        this.round = 1;
        this.rollsLeft = MAX_ROLLS_PER_TURN;
        this.gameOver = false;
    }

    /** Start a completely new game. */
    startNewGame() {
        this.dice.reset();
        this.engine = new YatzyEngine();
        this.round = 1;
        this.rollsLeft = MAX_ROLLS_PER_TURN;
        this.gameOver = false;
        return this.getPublicState();
    }

    /** Roll non-held dice if rolls remain. */
    rollDice() {
        if (this.gameOver || this.rollsLeft <= 0) return this.dice.values;
        this.rollsLeft--;
        return this.dice.roll();
    }

    /** Hold/unhold a die (0-based index) */
    toggleHold(index) {
        if (this.gameOver) return;
        this.dice.toggleHold(index);
    }

    /** Clear all holds for new turn convenience. */
    clearHolds() {
        this.dice.clearHolds();
    }

    /**
     * Preview score for a category without committing.
     * Useful for UI hover/speculative score cell.
     */
    getScorePreview(category) {
        return this.engine.calculateScore(category, this.dice.values);
    }

    /**
     * Commit score for a category, advance the turn if valid.
     * Returns true on success.
     */
    placeScore(category) {
        if (this.gameOver) return false;
        if (!this.engine.isValidSelection(category, this.dice.values)) return false;

        const score = this.engine.calculateScore(category, this.dice.values);
        if (!this.engine.setScore(category, score)) return false;

        this.endTurn(); // advance to next round
        return true;
    }

    /** End current turn, reset rolls, clear holds, and progress rounds. */
    endTurn() {
        this.round++;
        this.rollsLeft = MAX_ROLLS_PER_TURN;
        this.dice.clearHolds();

        // End game if all categories filled or round exceeds MAX_TURNS
        const allFilled = [...this.engine.scoreTable.values()].every(v => v !== null);
        if (allFilled || this.round > MAX_TURNS) {
            this.endGame();
        }
    }

    /** Set final state and return final total. */
    endGame() {
        this.gameOver = true;
        return this.engine.total();
    }

    /** State snapshot for UI binding */
    getPublicState() {
        return {
            round: this.round,
            rollsLeft: this.rollsLeft,
            gameOver: this.gameOver,
            dice: this.dice.getState(),
            scores: Object.fromEntries(this.engine.scoreTable),
            upperSubtotal: this.engine.upperSubtotal(),
            upperBonus: this.engine.upperBonus(),
            lowerSubtotal: this.engine.lowerSubtotal(),
            total: this.engine.grandTotal()
        };
    }
}

export { Categories };