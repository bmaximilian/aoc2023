import { getNextValue } from './getNextValue';
import { getPreviousValue } from './getPreviousValue';

export enum Mode {
    Future = 'future',
    Past = 'past',
}

export const predictHistories = (input: string, mode: Mode): number => {
    return input
        .trim()
        .split('\n')
        .reduce((acc, line) => {
            const numbers = line
                .trim()
                .split(/\s+/)
                .map((number) => parseInt(number, 10));

            return acc + (mode === Mode.Future ? getNextValue(numbers) : getPreviousValue(numbers));
        }, 0);
};
