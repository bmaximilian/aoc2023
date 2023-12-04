import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getScratchcardWins } from './getScratchcardPoints';

task(() => {
    const input = getInput(__dirname);

    console.log(getScratchcardWins(input));
});
