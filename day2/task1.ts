import { getInput } from '../utils/getInput';
import { getSumOfPossibleGames } from './getSumOfPossibleGames';
import { task } from '../utils/getPerformanceReport';

task(() => {
    const input = getInput(__dirname);
    console.log(getSumOfPossibleGames(input, { red: 12, green: 13, blue: 14 }));
});
