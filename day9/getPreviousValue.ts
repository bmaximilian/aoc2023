import { getSubsequences } from './getSubsequences';

export const getPreviousValue = (input: number[]): number => {
    const subsequences = getSubsequences(input);

    subsequences.reverse().forEach((subsequence, index) => {
        if (index === 0) {
            subsequence.push(subsequence[subsequence.length - 1]);
            return;
        }

        subsequence.reverse();

        subsequence.push(
            subsequence[subsequence.length - 1] - subsequences[index - 1][subsequences[index - 1].length - 1],
        );
    });

    return subsequences[subsequences.length - 1][subsequences[subsequences.length - 1].length - 1];
};
