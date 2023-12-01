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

        it('should throw an error if the input does not contain a number', () => {
            expect(() => findTwoDigitNumber('lqiuvkqgervkj')).toThrowError('Input must contain at least one number');
        });

        it('should find a written number at the start', () => {
            expect(findTwoDigitNumber('onexy3')).toBe(13);
        });

        it('should find a written number in the middle', () => {
            expect(findTwoDigitNumber('twaaonexy3')).toBe(13);
        });

        it('should find a written number as last digit', () => {
            expect(findTwoDigitNumber('3twaaonexy')).toBe(31);
        });

        it('should find a written number in a string with only one number', () => {
            expect(findTwoDigitNumber('twaaonexy')).toBe(11);
        });
        it('1', () => {
            expect(findTwoDigitNumber('two1nine')).toBe(29);
        });
        it('2', () => {
            expect(findTwoDigitNumber('eightwothree')).toBe(83);
        });
        it('3', () => {
            expect(findTwoDigitNumber('abcone2threexyz')).toBe(13);
        });
        it('4', () => {
            expect(findTwoDigitNumber('xtwone3four')).toBe(24);
        });
        it('5', () => {
            expect(findTwoDigitNumber('4nineeightseven2')).toBe(42);
        });
        it('6', () => {
            expect(findTwoDigitNumber('zoneight234')).toBe(14);
        });
        it('7', () => {
            expect(findTwoDigitNumber('7pqrstsixteen')).toBe(76);
        });
    });
});
