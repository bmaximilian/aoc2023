import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { findAdjacentNumbers } from './findAdjacentNumbers';

task(() => {
    const input = getInput(__dirname);
    const numbers = findAdjacentNumbers(input);

    console.log(numbers.reduce((acc, number) => acc + number, 0));
});
