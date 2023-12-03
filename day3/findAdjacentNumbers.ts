import { convertInputToMatrix } from './utils/convertInputToMatrix';
import { Pointer } from './utils/Pointer';

export const findAdjacentNumbers = (input: string): number[] => {
    const matrix = convertInputToMatrix(input);

    const numbers: number[] = [];
    const pointer = new Pointer(matrix);

    while (true) {
        if (pointer.isCurrentNodeSymbol()) {
            const adjacentNumbers = pointer.getUncheckedAdjacentNumbers();
            numbers.push(...adjacentNumbers);
        }

        try {
            pointer.move();
        } catch (e) {
            break;
        }
    }

    return numbers;
};
