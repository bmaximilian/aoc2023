import { getErrorMarginForRaces } from './getErrorMarginForRaces';

describe('getErrorMarginForRaces', () => {
    it('should multiply the winning combinations to get the error margin', () => {
        const input = `
            Time:      7  15   30
            Distance:  9  40  200
       `;

        expect(getErrorMarginForRaces(input)).toEqual(288);
    });
});
