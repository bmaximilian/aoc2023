import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getMinLocationNumberForSeedRange } from './getMinLocationNumbersForSeedRange';

task(() => {
    const input = getInput(__dirname);

    console.log(getMinLocationNumberForSeedRange(input));
});
