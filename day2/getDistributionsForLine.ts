import { BallDistribution } from './Game';

export const getDistributionsForLine = (line: string): BallDistribution[] => {
    return line.split(';').map((turn) => ({
        red: parseInt(/(\d+)\sred/.exec(turn)?.[1] || '0', 10),
        blue: parseInt(/(\d+)\sblue/.exec(turn)?.[1] || '0', 10),
        green: parseInt(/(\d+)\sgreen/.exec(turn)?.[1] || '0', 10),
    }));
};
