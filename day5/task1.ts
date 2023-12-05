import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getLocationNumbersForSeeds } from './getLocationNumbersForSeeds';

task(() => {
    const input = getInput(__dirname);

    const numbers = getLocationNumbersForSeeds(input);

    console.log(Math.min(...Object.keys(numbers).map(Number)));
});
