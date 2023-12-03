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

export const findGearRatios = (input: string): number[] => {
    const matrix = convertInputToMatrix(input);

    const gearRatios: number[] = [];
    const pointer = new Pointer(matrix);

    while (true) {
        if (pointer.isCurrentNodeGear()) {
            const adjacentNumbers = pointer.getUncheckedAdjacentNumbers();

            if (adjacentNumbers.length === 2) {
                gearRatios.push(adjacentNumbers[0] * adjacentNumbers[1]);
            }
        }

        try {
            pointer.move();
        } catch (e) {
            break;
        }
    }

    return gearRatios;
};
