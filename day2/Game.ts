import { keysOf } from '../utils/keysOf';

export interface BallDistribution {
    red: number;
    blue: number;
    green: number;
}

export class Game {
    constructor(private ballsInGame: BallDistribution) {}

    public revealBalls(revealedBalls: BallDistribution): this {
        keysOf(revealedBalls).forEach((color) => {
            const revealedBallsOfColor = revealedBalls[color];
            const ballsInGameOfColor = this.ballsInGame[color];

            if (revealedBallsOfColor > ballsInGameOfColor) {
                throw new Error(
                    `Revealed ${color} balls (${revealedBallsOfColor}) are higher than ${color} balls in the game (${ballsInGameOfColor})`,
                );
            }
        });

        return this;
    }
}
