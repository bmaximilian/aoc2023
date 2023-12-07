import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getTotalWinnings } from './getTotalWinnings';

task(() => {
    const input = getInput(__dirname);

    console.log(getTotalWinnings(input));
});
