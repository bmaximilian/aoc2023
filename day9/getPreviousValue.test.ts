import { getPreviousValue } from './getPreviousValue';

describe('getPreviousValue', () => {
    it('should return the previous value in the sequence', () => {
        expect(getPreviousValue([1, 2, 3, 4, 5])).toEqual(0);
    });

    it('should return the previous value in the sequence', () => {
        expect(getPreviousValue([10, 13, 16, 21, 30, 45])).toEqual(5);
    });
});
