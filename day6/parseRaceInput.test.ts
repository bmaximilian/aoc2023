import { parseRaceInput } from './getErrorMarginForRaces';
import { Race } from './Race';

describe('parseRaceInput', () => {
    it('should parse the input correctly', () => {
        const input = `
            Time:      7  15   30
            Distance:  9  40  200
       `;

        expect(parseRaceInput(input)).toContainEqual(new Race(7, 9));
        expect(parseRaceInput(input)).toContainEqual(new Race(15, 40));
        expect(parseRaceInput(input)).toContainEqual(new Race(30, 200));
    });
});
