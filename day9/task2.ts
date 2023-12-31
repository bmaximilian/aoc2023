import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { Mode, predictHistories } from './predictHistories';

task(() => {
    const input = getInput(__dirname);

    console.log(predictHistories(input, Mode.Past));
});
