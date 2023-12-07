import { Hand } from './Hand';

export class BiddedHand {
    public constructor(
        public readonly hand: Hand,
        public readonly bid: number,
    ) {}
}
