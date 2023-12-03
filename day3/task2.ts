import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { findGearRatios } from './findAdjacentNumbers';

task(() => {
    const input = getInput(__dirname);
    const numbers = findGearRatios(input);

    console.log(numbers.reduce((acc, number) => acc + number, 0));
});
