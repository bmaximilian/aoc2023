import { AlmanacMap } from './AlmanacMap';

const getMapsFromInput = (input: string): AlmanacMap[] => {
    const lines = input.split('\n');
    const maps = [];

    while (lines.length !== 0) {
        const line = lines.shift();
        if (!line) {
            continue;
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

    return maps;
};

const getSeedRanges = (input: string): [number, number][] => {
    const seedLine = input.split('\n').find((line) => /seeds:\s\d/.test(line));
    if (!seedLine) {
        return [];
    }

    const seedNumbers = seedLine
        .trim()
        .replace(/seeds:\s/, '')
        .split(' ');

    const seedRanges: [number, number][] = [];

    while (seedNumbers.length !== 0) {
        const seedNumber = seedNumbers.shift();
        if (!seedNumber) {
            continue;
        }

        const seedRange = seedNumbers.shift();
        if (!seedRange) {
            continue;
        }

        const start = Number(seedNumber);
        const end = start + Number(seedRange);
        seedRanges.push([start, end]);
    }

    return seedRanges;
};

const getMinLocationNumberForSeeds = (seeds: number[], maps: AlmanacMap[]) => {
    return seeds.reduce((record, seed) => {
        const number = maps.reduce((number, map) => map.convert(number), seed);

        if (!record) {
            return number;
        }

        return Math.min(record, number);
    });
};

export const getMinLocationNumberForSeedRange = (input: string): number => {
    const maps = getMapsFromInput(input);
    const seedRanges = getSeedRanges(input);

    let minLocationNumber;

    for (const [start, end] of seedRanges) {
        const locationNumber = getMinLocationNumberForSeeds(
            Array.from({ length: end - start }, (_, index) => index + start),
            maps,
        );

        if (!minLocationNumber) {
            minLocationNumber = locationNumber;
            continue;
        }

        minLocationNumber = Math.min(minLocationNumber, locationNumber);
    }

    if (!minLocationNumber) {
        throw new Error('No seed ranges found');
    }

    return minLocationNumber;
};
