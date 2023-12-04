import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getScratchcardPoints } from './getScratchcardPoints';

task(() => {
    const input = getInput(__dirname);

    console.log(getScratchcardPoints(input));
});
