export const convertInputToMatrix = (input: string): string[][] => {
    const lines = input.split('\n');
    return lines.reduce<string[][]>((acc, line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.length > 0) {
            return [...acc, trimmedLine.split('')];
        }
        return acc;
    }, []);
};
