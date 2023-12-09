import { Mode, predictHistories } from './predictHistories';

describe('predictHistories', () => {
    it('should be able to predict next numeric sequences', () => {
        const input = `
            0 3 6 9 12 15
            1 3 6 10 15 21
            10 13 16 21 30 45
       `;

        expect(predictHistories(input, Mode.Future)).toEqual(114);
    });

    it('should be able to predict past numeric sequences', () => {
        const input = `
            0 3 6 9 12 15
            1 3 6 10 15 21
            10 13 16 21 30 45
       `;

        expect(predictHistories(input, Mode.Past)).toEqual(2);
    });
});
