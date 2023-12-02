import { getInput } from '../utils/getInput';
import { getPowerOfMinimumCubes } from './getMinCubes';
import { task } from '../utils/getPerformanceReport';

task(() => {
    const input = getInput(__dirname);
    console.log(getPowerOfMinimumCubes(input));
});
