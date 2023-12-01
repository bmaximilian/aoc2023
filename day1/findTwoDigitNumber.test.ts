import { findTwoDigitNumber } from './findTwoDigitNumber';

describe('day1/task1/findTwoDigitNumber', () => {
    describe('findTwoDigitNumber', () => {
        it('should throw an error if the input is empty', () => {
            expect(() => findTwoDigitNumber('')).toThrowError('Input must not be empty');
        });

        it('should discover a two digit number at the start and end from a string', () => {
            expect(findTwoDigitNumber('1abc2')).toBe(12);
        });

        it('should discover a two digit number in the middle of a string', () => {
            expect(findTwoDigitNumber('pqr3stu8vwx')).toBe(38);
        });

        it('should discover a two digit number within a string that contains other numbers', () => {
            expect(findTwoDigitNumber('a1b2c3d4e5f')).toBe(15);
        });

        it('should reuse the digit if the string contains only one number', () => {
            expect(findTwoDigitNumber('treb7uchet')).toBe(77);
        });

        it.skip('should throw an error if the input does not contain a number', () => {
            expect(() => findTwoDigitNumber('lqiuvkqgervkj')).toThrowError('Input must contain at least one number');
        });
    });
});
