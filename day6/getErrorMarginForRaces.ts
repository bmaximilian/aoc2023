import { Race } from './Race';

export const parseRaceInput = (input: string): Race[] => {
    const lines = input.trim().split('\n');
    const timeValues = lines[0].trim().split(/\s+/).slice(1).map(Number);
    const distanceValues = lines[1].trim().split(/\s+/).slice(1).map(Number);

    return timeValues.map((time, index) => new Race(time, distanceValues[index]));
};

export const getErrorMarginForRaces = (input: string): number => {
    return parseRaceInput(input).reduce((margin, race) => margin * race.getPossibleWinningCombinations(), 1);
};
