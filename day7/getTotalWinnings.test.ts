import { getTotalWinnings } from './getTotalWinnings';

describe('getTotalWinnings', () => {
    it('should return the total winnings', () => {
        const input = `
            32T3K 765
            T55J5 684
            KK677 28
            KTJJT 220
            QQQJA 483
        `;

        expect(getTotalWinnings(input)).toEqual(5905);
    });
});
