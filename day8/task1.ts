import { task } from '../utils/getPerformanceReport';
import { getInput } from '../utils/getInput';
import { traverseMap } from './traverseMap';

task(() => {
    const input = getInput(__dirname);

    console.log(traverseMap(input));
});
