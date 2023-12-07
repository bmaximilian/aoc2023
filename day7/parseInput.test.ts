import { BiddedHand } from './BiddedHand';
import { Hand } from './Hand';
import { parseInput } from './getTotalWinnings';

describe('parseInput', () => {
    it('should parse the input', () => {
        const input = `
            32T3K 765
            T55J5 684
            KK677 28
            KTJJT 220
            QQQJA 483
        `;

        expect(parseInput(input)).toContainEqual(new BiddedHand(new Hand('32T3K'), 765));
        expect(parseInput(input)).toContainEqual(new BiddedHand(new Hand('T55J5'), 684));
        expect(parseInput(input)).toContainEqual(new BiddedHand(new Hand('KK677'), 28));
        expect(parseInput(input)).toContainEqual(new BiddedHand(new Hand('KTJJT'), 220));
        expect(parseInput(input)).toContainEqual(new BiddedHand(new Hand('QQQJA'), 483));
    });
});
