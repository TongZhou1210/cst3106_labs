import { DiceSet } from './dice.js';
import { YatzyEngine, Categories } from './yatzyEngine.js';

export class YatzyGame {
    constructor() {
        this.dice = new DiceSet(5);
        this.engine = new YatzyEngine();
        this.round = 1;
        this.rollsLeft = 3;
        this.gameOver = false;
    }

    startNewGame() {
        this.dice.reset();
        this.engine = new YatzyEngine();
        this.round = 1;
        this.rollsLeft = 3;
        this.gameOver = false;
    }

    rollDice() {
        if (this.rollsLeft <= 0 || this.gameOver) return this.dice.values;
        this.rollsLeft--;
        return this.dice.roll();
    }

    placeScore(category) {
        if (!this.engine.isValidSelection(category, this.dice.values)) return false;
        const score = this.engine.calculateScore(category, this.dice.values);
        this.engine.setScore(category, score);
        this.endTurn();
        return true;
    }

    endTurn() {
        this.round++;
        this.rollsLeft = 3;
        const allFilled = [...this.engine.scoreTable.values()].every(v => v !== null);
        if (allFilled) this.endGame();
    }

    endGame() {
        this.gameOver = true;
        return this.engine.total();
    }
}

export { Categories };