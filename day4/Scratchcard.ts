const numberStringToArray = (input: string): number[] =>
    input.split(' ').reduce<number[]>((acc, s) => {
        if (s.trim().length === 0) {
            return acc;
        }

        return [...acc, parseInt(s.trim(), 10)];
    }, []);

export class Scratchcard {
    static fromString(input: string): Scratchcard {
        const [winningNumbersString, drawnNumbersString] = input
            .replace(/Card\s+(\d+):\s/, '')
            .split('|')
            .map((s) => s.trim());
        const winningNumbers = numberStringToArray(winningNumbersString);
        const drawnNumbers = numberStringToArray(drawnNumbersString);

        return new Scratchcard(winningNumbers, drawnNumbers);
    }

    constructor(
        private readonly winningNumbers: number[],
        private readonly drawnNumbers: number[],
    ) {}

    public getWinningNumbers(): number[] {
        return this.winningNumbers;
    }

    public getDrawnNumbers(): number[] {
        return this.drawnNumbers;
    }

    public getMatchingNumbers(): number[] {
        const drawnNumbers = new Set(this.drawnNumbers);

        return this.winningNumbers.filter((n) => drawnNumbers.has(n));
    }

    public getPoints(): number {
        const matchingNumbers = this.getMatchingNumbers();

        if (matchingNumbers.length === 0) {
            return 0;
        }

        return Math.pow(2, matchingNumbers.length - 1);
    }
}
