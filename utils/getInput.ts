import { readFileSync } from 'fs';

export const getInput = (dir: string): string => {
    return readFileSync(dir + '/input.txt', 'utf8');
};
