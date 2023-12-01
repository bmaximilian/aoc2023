import { readFileSync } from 'fs';
import { findTwoDigitNumber } from './findTwoDigitNumber';

const input = readFileSync(__dirname + '/input.txt', 'utf8');

const numbers = input.split('\n').map((line) => findTwoDigitNumber(line));
const sum = numbers.reduce((sum, number) => sum + number, 0);

console.log(sum);
