import { Race } from './Race';

describe('Race', () => {
    it('should get the possible winning combinations (1)', () => {
        const race = new Race(7, 9);

        expect(race.getPossibleWinningCombinations()).toEqual(4);
    });

    it('should get the possible winning combinations (2)', () => {
        const race = new Race(15, 40);

        expect(race.getPossibleWinningCombinations()).toEqual(8);
    });

    it('should get the possible winning combinations (3)', () => {
        const race = new Race(30, 200);

        expect(race.getPossibleWinningCombinations()).toEqual(9);
    });
});
