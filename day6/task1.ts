import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { getErrorMarginForRaces } from './getErrorMarginForRaces';

task(() => {
    const input = getInput(__dirname);

    console.log(getErrorMarginForRaces(input));
});
