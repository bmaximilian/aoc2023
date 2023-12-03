import { convertInputToMatrix } from './convertInputToMatrix';

describe('convertInputToMatrix', () => {
    it('should parse an input', () => {
        const input = `
            123
            .#.
            ...
        `;
        const result = convertInputToMatrix(input);
        expect(result).toEqual([
            ['1', '2', '3'],
            ['.', '#', '.'],
            ['.', '.', '.'],
        ]);
    });
});
