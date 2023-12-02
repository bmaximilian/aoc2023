import { BallDistribution, Game } from './Game';
import { getDistributionsForLine } from './getDistributionsForLine';

export const getSumOfPossibleGames = (input: string, balls: BallDistribution): number => {
    return input.split('\n').reduce((possibleGames, line, index) => {
        if (!line.trim()) {
            return possibleGames;
        }

        const gameIdMatch = /^Game\s(\d+):\s/.exec(line.trim());
        if (!gameIdMatch) {
            throw new Error(`Invalid input on line ${index}: Cannot identify game id`);
        }

        const gameId = parseInt(gameIdMatch[1], 10);
        const turns = getDistributionsForLine(line);

        try {
            const game = new Game(balls);
            turns.forEach((turn) => game.revealBalls(turn));
            return possibleGames + gameId;
        } catch (error) {
            return possibleGames;
        }
    }, 0);
};
