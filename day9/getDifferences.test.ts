import { getDifferences } from './getDifferences';

describe('getDifferences', () => {
    it('should return a list of differences between a number sequence', () => {
        expect(getDifferences([1, 2, 3, 4, 5])).toEqual([1, 1, 1, 1]);
    });
});
