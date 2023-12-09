import { predictHistories } from './predictHistories';

describe('predictHistories', () => {
    it('should be able to predict numeric sequences', () => {
        const input = `
            0 3 6 9 12 15
            1 3 6 10 15 21
            10 13 16 21 30 45
       `;

        expect(predictHistories(input)).toEqual(114);
    });
});
