export const getDifferences = (input: number[]): number[] => {
    const differences: number[] = [];

    for (let i = 0; i < input.length - 1; i++) {
        differences.push(input[i + 1] - input[i]);
    }

    return differences;
};
