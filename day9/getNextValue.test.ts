import { getNextValue } from './getNextValue';

describe('getNextValue', () => {
    it('should return the next value in the sequence', () => {
        expect(getNextValue([1, 2, 3, 4, 5])).toEqual(6);
    });

    it('should return the next value in the sequence', () => {
        expect(getNextValue([10, 13, 16, 21, 30, 45])).toEqual(68);
    });
});
