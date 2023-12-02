import { Game } from './Game';
import { getSumOfPossibleGames } from './getSumOfPossibleGames';
import { getMinCubesForLine, getPowerOfMinimumCubes } from './getMinCubes';

describe('day2', () => {
    describe('task1', () => {
        describe('Game', () => {
            const game = new Game({ red: 12, blue: 13, green: 14 });

            it('should mark the game as possible if the number of balls shown for each color are lower than the balls in game', () => {
                expect(() => {
                    game.revealBalls({ red: 4, green: 0, blue: 3 })
                        .revealBalls({ red: 1, green: 2, blue: 0 })
                        .revealBalls({ red: 0, green: 2, blue: 6 });
                }).not.toThrow();
            });

            it('should mark the game as impossible if the number of balls shown of one color is higher than the total amount of that color', () => {
                expect(() => game.revealBalls({ red: 20, green: 8, blue: 6 })).toThrowError(
                    'Revealed red balls (20) are higher than red balls in the game (12)',
                );
            });
        });

        describe('getSumOfPossibleGames', () => {
            const input = `
                Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
                Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
                Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
                Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
                Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
            `;

            it('should return the sum of possible games', () => {
                expect(getSumOfPossibleGames(input, { red: 12, blue: 13, green: 14 })).toBe(8);
            });
        });
    });
});
