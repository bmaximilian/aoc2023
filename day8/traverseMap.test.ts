import { traverseMap } from './traverseMap';

describe('traverseMap', () => {
    it('should reach the end in 2 steps', () => {
        const input = `
            RL

            AAA = (BBB, CCC)
            BBB = (DDD, EEE)
            CCC = (ZZZ, GGG)
            DDD = (DDD, DDD)
            EEE = (EEE, EEE)
            GGG = (GGG, GGG)
            ZZZ = (ZZZ, ZZZ)
        `;

        expect(traverseMap(input)).toEqual(2);
    });

    it('should reach the end in 6 steps', () => {
        const input = `
            LLR

            AAA = (BBB, BBB)
            BBB = (AAA, ZZZ)
            ZZZ = (ZZZ, ZZZ)
        `;

        expect(traverseMap(input)).toEqual(6);
    });
});
