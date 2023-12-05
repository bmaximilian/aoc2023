import { AlmanacMap } from './AlmanacMap';

const getSeedsAndMapsFromInput = (input: string): { seeds: number[]; maps: AlmanacMap[] } => {
    const lines = input.split('\n');
    const seeds = [];
    const maps = [];

    while (lines.length !== 0) {
        const line = lines.shift();
        if (!line) {
            continue;
        }

        if (seeds.length === 0 && /seeds:\s\d/.test(line)) {
            seeds.push(
                ...line
                    .trim()
                    .replace(/seeds:\s/, '')
                    .split(' ')
                    .map(Number),
            );
        }

        if (/\smap:$/.test(line)) {
            const mapStrings = [];
            while (lines.length !== 0) {
                const mapLine = lines.shift();

                if (!mapLine || mapLine.trim() === '') {
                    break;
                }

                mapStrings.push(mapLine);
            }

            maps.push(AlmanacMap.fromString(mapStrings.join('\n')));
        }
    }

    return { seeds, maps };
};

export const getLocationNumbersForSeeds = (input: string): Record<number, number> => {
    const { seeds, maps } = getSeedsAndMapsFromInput(input);

    return seeds.reduce<Record<number, number>>((record, seed) => {
        const number = maps.reduce((number, map) => map.convert(number), seed);

        return {
            ...record,
            [number]: seed,
        };
    }, {});
};
