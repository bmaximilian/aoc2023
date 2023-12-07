import { BiddedHand } from './BiddedHand';
import { Hand } from './Hand';

export const parseInput = (input: string): BiddedHand[] => {
    return input
        .trim()
        .split('\n')
        .reduce<BiddedHand[]>((total, line) => {
            if (!line.trim()) {
                return total;
            }

            const [hand, bid] = line.trim().split(/\s+/);

            return [...total, new BiddedHand(new Hand(hand), Number(bid))];
        }, []);
};

export const getTotalWinnings = (input: string): number => {
    const hands = parseInput(input).sort((a, b) => (a.hand.isBetterThan(b.hand) ? 1 : -1));

    return hands.reduce((total, hand, rank) => total + hand.bid * (rank + 1), 0);
};
