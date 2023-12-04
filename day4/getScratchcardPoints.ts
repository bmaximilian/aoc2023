import { Scratchcard } from './Scratchcard';

const getScratchcards = (input: string): Scratchcard[] => {
    return input.split('\n').reduce<Scratchcard[]>((acc, s) => {
        if (s.trim().length === 0) {
            return acc;
        }

        return [...acc, Scratchcard.fromString(s)];
    }, []);
};

export const getScratchcardPoints = (input: string): number => {
    const scratchcards = getScratchcards(input);

    return scratchcards.reduce((acc, scratchcard) => acc + scratchcard.getPoints(), 0);
};

export const getScratchcardWins = (input: string): number => {
    const scratchcards = getScratchcards(input).map((card) => ({ card, instances: 1 }));

    for (let i = 0; i < scratchcards.length; i++) {
        const scratchcard = scratchcards[i].card;
        const matchingNumbers = scratchcard.getMatchingNumbers();

        for (let j = 1; j <= matchingNumbers.length; j++) {
            if (scratchcards.length > i + j) {
                scratchcards[i + j].instances += scratchcards[i].instances;
            }
        }
    }

    return scratchcards.reduce((acc, { instances }) => acc + instances, 0);
};
