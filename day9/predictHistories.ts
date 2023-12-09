import { getNextValue } from './getNextValue';

export const predictHistories = (input: string): number => {
    return input
        .trim()
        .split('\n')
        .reduce((acc, line) => {
            const numbers = line
                .trim()
                .split(/\s+/)
                .map((number) => parseInt(number, 10));

            return acc + getNextValue(numbers);
        }, 0);
};
