export class Race {
    constructor(
        private time: number,
        public distanceRecord: number,
    ) {}

    public getPossibleWinningCombinations(): number {
        let winningCombinations = 0;

        for (let speed = 1; speed < this.time; speed++) {
            const distance = (this.time - speed) * speed;

            if (distance > this.distanceRecord) {
                winningCombinations++;
            }
        }

        return winningCombinations;
    }
}
