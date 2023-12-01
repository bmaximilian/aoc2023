const findNumberFromStart = (chars: string[]): string | undefined => chars.find((char) => !isNaN(parseInt(char, 10)));

export const findTwoDigitNumber = (input: string): number => {
    if (input === '') {
        throw new Error('Input must not be empty');
    }

    const chars = input.split('');
    const firstDigit = findNumberFromStart(chars);
    const lastDigit = findNumberFromStart(chars.reverse());

    if (!firstDigit && !lastDigit) {
        throw new Error('Input must contain at least one number');
    }

    return parseInt((firstDigit || '') + (lastDigit || ''), 10);
};
