import { Scratchcard } from './Scratchcard';

export const getScratchcardPoints = (input: string): number => {
    const scratchcards = input.split('\n').reduce<Scratchcard[]>((acc, s) => {
        if (s.trim().length === 0) {
            return acc;
        }

        return [...acc, Scratchcard.fromString(s)];
    }, []);

    return scratchcards.reduce((acc, scratchcard) => acc + scratchcard.getPoints(), 0);
};
