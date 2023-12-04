import { Scratchcard } from './Scratchcard';

describe('Scratchcard', () => {
    it('should be able to create from a string', () => {
        const scratchcard = Scratchcard.fromString('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53');

        expect(scratchcard.getWinningNumbers()).toEqual([41, 48, 83, 86, 17]);
        expect(scratchcard.getDrawnNumbers()).toEqual([83, 86, 6, 31, 17, 9, 48, 53]);
    });

    it('should find the matching numbers', () => {
        const scratchcard = new Scratchcard([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]);

        const matchingNumbers = scratchcard.getMatchingNumbers();
        expect(matchingNumbers).toContain(83);
        expect(matchingNumbers).toContain(86);
        expect(matchingNumbers).toContain(17);
        expect(matchingNumbers).toContain(48);
    });

    it('should give a card 8 points that has 4 matching numbers', () => {
        const scratchcard = new Scratchcard([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]);

        expect(scratchcard.getPoints()).toEqual(8);
    });

    it('should give a card 2 points that has 2 matching numbers', () => {
        const scratchcard = new Scratchcard([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]);

        expect(scratchcard.getPoints()).toEqual(2);
    });

    it('should give a card 1 point that has 1 matching number', () => {
        const scratchcard = new Scratchcard([41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]);

        expect(scratchcard.getPoints()).toEqual(1);
    });

    it('should give a card 0 points that has no matching numbers', () => {
        const scratchcard = new Scratchcard([87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]);

        expect(scratchcard.getPoints()).toEqual(0);
    });
});
