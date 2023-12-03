import { findAdjacentNumbers, findGearRatios } from './findAdjacentNumbers';

describe('day3', () => {
    describe('findAdjacentNumbers', () => {
        it('should return an empty array if no numbers are found', () => {
            const input = `
                ....
                ....
            `;
            expect(findAdjacentNumbers(input)).toEqual([]);
        });

        it('should find the numbers adjacent to a symbol', () => {
            const input = `
                467..114..
                ...*......
                ..35..633.
                ......#...
                617*......
                .....+.58.
                ..592.....
                ......755.
                ...$.*....
                .664.598..
            `;

            const result = findAdjacentNumbers(input);
            expect(result).toContain(467);
            expect(result).toContain(35);
            expect(result).toContain(633);
            expect(result).toContain(617);
            expect(result).toContain(592);
            expect(result).toContain(755);
            expect(result).toContain(664);
            expect(result).toContain(598);
        });
    });

    describe('findGearRatios', () => {
        it('should return an empty array if no numbers are found', () => {
            const input = `
                ....
                ....
            `;
            expect(findGearRatios(input)).toEqual([]);
        });

        it('should find the numbers adjacent to a star and multiply them (=gear ratio)', () => {
            const input = `
                467..114..
                ...*......
                ..35..633.
                ......#...
                617*......
                .....+.58.
                ..592.....
                ......755.
                ...$.*....
                .664.598..
            `;

            const result = findGearRatios(input);
            expect(result).toContain(16345);
            expect(result).toContain(451490);
        });
    });
});
