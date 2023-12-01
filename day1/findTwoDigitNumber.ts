const findNumberFromStart = (
    chars: string[],
    map = digitMap,
    matchingDigitStrings = [...digitMap.keys()],
    digitMatchIndex = 0,
): string | undefined => {
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (!isNaN(parseInt(char, 10))) {
            return char;
        }

        const remainingDigitStrings = matchingDigitStrings.filter(
            (digitString) => digitString[digitMatchIndex] === char,
        );

        if (remainingDigitStrings.length === 1 && remainingDigitStrings[0].length === digitMatchIndex + 1) {
            return map.get(remainingDigitStrings[0]);
        }

        if (remainingDigitStrings.length === 0) {
            if (digitMatchIndex === 0) {
                continue;
            } else {
                return undefined;
            }
        }

        const foundWithSubLookup = findNumberFromStart(
            chars.slice(i + 1),
            map,
            remainingDigitStrings,
            digitMatchIndex + 1,
        );
        if (foundWithSubLookup) {
            return foundWithSubLookup;
        }
    }
};

const digitMap = new Map<string, string>([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
]);

const reverseKeysOfMap = (map: Map<string, string>): Map<string, string> => {
    const reversedMap = new Map<string, string>();
    [...map.keys()].forEach((key) => {
        reversedMap.set(key.split('').reverse().join(''), map.get(key) as string);
    });
    return reversedMap;
};

export const findTwoDigitNumber = (input: string): number => {
    if (input === '') {
        throw new Error('Input must not be empty');
    }

    const chars = input.split('');
    const firstDigit = findNumberFromStart(chars);

    const mapWithReversedKeys = reverseKeysOfMap(digitMap);
    const lastDigit = findNumberFromStart(chars.reverse(), mapWithReversedKeys, [...mapWithReversedKeys.keys()]);

    if (!firstDigit && !lastDigit) {
        throw new Error('Input must contain at least one number');
    }

    return parseInt((firstDigit || '') + (lastDigit || ''), 10);
};
