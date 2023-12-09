import { getSubsequences } from './getSubsequences';

describe('getSubsequences', () => {
    it('should directly return a list where all numbers are equal', () => {
        expect(getSubsequences([1, 1, 1, 1])).toEqual([[1, 1, 1, 1]]);
    });

    it('should compose subsequences', () => {
        expect(getSubsequences([1, 3, 6, 10, 15, 21])).toEqual([
            [1, 3, 6, 10, 15, 21],
            [2, 3, 4, 5, 6],
            [1, 1, 1, 1],
        ]);
    });
});
