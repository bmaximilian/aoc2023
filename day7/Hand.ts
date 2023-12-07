export enum HandType {
    HighCard = 0,
    Pair = 1,
    TwoPairs = 2,
    ThreeOfAKind = 3,
    FullHouse = 4,
    FourOfAKind = 5,
    FiveOfAKind = 6,
}

const cardValueOrder = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];

export class Hand {
    private readonly cards: string[];
    public readonly type: HandType;

    public constructor(cardSelection: string) {
        this.cards = cardSelection.split('');

        if (this.cards.length !== 5) {
            throw new Error('A hand must have exactly five cards');
        }

        this.type = this.calculateType();
    }

    private calculateType(): HandType {
        const jokerCount = this.cards.filter((card) => card === 'J').length;
        const carsWithoutJokers = this.cards.filter((card) => card !== 'J');

        const cardCounts = new Map<string, number>();
        carsWithoutJokers.forEach((card) => {
            if (!cardCounts.has(card)) {
                cardCounts.set(card, 1);
                return;
            }

            cardCounts.set(card, cardCounts.get(card)! + 1);
        });

        const maxCardCount = carsWithoutJokers.length > 0 ? Math.max(...cardCounts.values()) : 0;
        const cardOccurrences = new Map<number, string[]>();
        cardCounts.forEach((count, card) => {
            if (!cardOccurrences.has(count)) {
                cardOccurrences.set(count, []);
            }

            cardOccurrences.set(count, [...cardOccurrences.get(count)!, card]);
        });

        if (maxCardCount === 5 || maxCardCount + jokerCount === 5) {
            return HandType.FiveOfAKind;
        }

        if (maxCardCount === 4 || maxCardCount + jokerCount === 4) {
            return HandType.FourOfAKind;
        }

        if (maxCardCount === 3 || maxCardCount + jokerCount === 3) {
            if (
                (maxCardCount === 3 && (jokerCount > 1 || cardOccurrences.has(2))) ||
                (cardOccurrences.get(2)?.length === 2 && jokerCount === 1)
            ) {
                return HandType.FullHouse;
            }

            return HandType.ThreeOfAKind;
        }

        if (cardOccurrences.has(2) || jokerCount > 0) {
            if (cardOccurrences.get(2)?.length === 2) {
                return HandType.TwoPairs;
            }

            return HandType.Pair;
        }

        return HandType.HighCard;
    }

    public isBetterThan(otherHand: Hand): boolean {
        if (this.type === otherHand.type) {
            for (let i = 0; i < this.cards.length; i++) {
                const thisCardValue = cardValueOrder.indexOf(this.cards[i]);
                const otherCardValue = cardValueOrder.indexOf(otherHand.cards[i]);

                if (thisCardValue === otherCardValue) {
                    continue;
                }

                return thisCardValue > otherCardValue;
            }
        }

        return this.type > otherHand.type;
    }
}
