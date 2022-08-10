class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.minP = min + 1;
        this.maxP = max -1;
        console.log(min, max);
    }

    guess() {
        this.lastGuess = Math.ceil((this.maxP - this.minP) / 2) + this.minP;
        return this.lastGuess;
    }

    lower() {
        this.maxP = this.lastGuess - 1;
    }

    greater() {
        this.minP = this.lastGuess + 1;
    }
}

module.exports = GuessingGame;
