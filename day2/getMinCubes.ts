import { BallDistribution } from './Game';
import { getDistributionsForLine } from './getDistributionsForLine';
import { keysOf } from '../utils/keysOf';

export const getMinCubesForLine = (line: string): BallDistribution => {
    const distributions = getDistributionsForLine(line);
    const minCubes = distributions.reduce(
        (minCubes, distribution) => {
            keysOf(distribution).forEach((color) => {
                if (distribution[color] > minCubes[color]) {
                    minCubes[color] = distribution[color];
                }
            });
            return minCubes;
        },
        { red: 0, blue: 0, green: 0 },
    );

    return minCubes;
};

export const getPowerOfMinimumCubes = (input: string): number => {
    return input.split('\n').reduce((power, line) => {
        if (!line.trim()) {
            return power;
        }
        const minCubes = getMinCubesForLine(line);

        return power + Object.values(minCubes).reduce((acc, cubes) => acc * cubes, 1);
    }, 0);
};
