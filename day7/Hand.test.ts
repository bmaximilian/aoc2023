import { Hand, HandType } from './Hand';

describe('Hand', () => {
    it('should throw if the hand has more than five cards', () => {
        expect(() => new Hand('23456K')).toThrow();
    });

    it('should throw if the hand has less than five cards', () => {
        expect(() => new Hand('2345')).toThrow();
    });

    describe('type', () => {
        it('should recognize a a high card', () => {
            const hand = new Hand('2359K');
            expect(hand.type).toEqual(HandType.HighCard);
        });

        it('should recognize a pair', () => {
            const hand = new Hand('23575');
            expect(hand.type).toEqual(HandType.Pair);
        });

        it('should recognize two pairs', () => {
            const hand = new Hand('23525');
            expect(hand.type).toEqual(HandType.TwoPairs);
        });

        it('should recognize three of a kind', () => {
            const hand = new Hand('53525');
            expect(hand.type).toEqual(HandType.ThreeOfAKind);
        });

        it('should recognize a full house', () => {
            const hand = new Hand('52525');
            expect(hand.type).toEqual(HandType.FullHouse);
        });

        it('should recognize four of a kind', () => {
            const hand = new Hand('55525');
            expect(hand.type).toEqual(HandType.FourOfAKind);
        });

        it('should recognize five of a kind', () => {
            const hand = new Hand('55555');
            expect(hand.type).toEqual(HandType.FiveOfAKind);
        });
    });

    describe('isBetterThan', () => {
        it('should return true if the hand is compared against a lower type', () => {
            const hand = new Hand('2322K'); // three of a kind
            expect(hand.isBetterThan(new Hand('22599'))).toEqual(true); // two pairs
            expect(hand.isBetterThan(new Hand('22539'))).toEqual(true); // one pair
            expect(hand.isBetterThan(new Hand('2359K'))).toEqual(true); // high card
        });

        it('should return false if the hand is compared against a higher type', () => {
            const hand = new Hand('9399K'); // three of a kind
            expect(hand.isBetterThan(new Hand('22224'))).toEqual(false); // four of a kind
            expect(hand.isBetterThan(new Hand('22222'))).toEqual(false); // five of a kind
        });

        it('should compare the cards in order if the types are the same', () => {
            const hand = new Hand('4344K');

            expect(hand.isBetterThan(new Hand('3555K'))).toEqual(true);
            expect(hand.isBetterThan(new Hand('5545K'))).toEqual(false);
        });

        it('should iterate through the cards in order if the types are the same', () => {
            const hand = new Hand('4344K');

            // compare second
            expect(hand.isBetterThan(new Hand('42KKK'))).toEqual(true);
            expect(hand.isBetterThan(new Hand('45333'))).toEqual(false);

            // compare last
            expect(hand.isBetterThan(new Hand('4344Q'))).toEqual(true);
            expect(hand.isBetterThan(new Hand('4344A'))).toEqual(false);
        });
    });
});
