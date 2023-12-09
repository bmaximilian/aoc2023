import { getDifferences } from './getDifferences';

const differenceInSequenceIsZero = (sequence: number[]): boolean => {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] !== sequence[i + 1]) {
            return false;
        }
    }

    return true;
};

export const getSubsequences = (input: number[]): number[][] => {
    const subsequences: number[][] = [input];

    while (!differenceInSequenceIsZero(subsequences[subsequences.length - 1])) {
        const lastSubsequence = subsequences[subsequences.length - 1];
        const differences = getDifferences(lastSubsequence);
        subsequences.push(differences);
    }

    return subsequences;
};
