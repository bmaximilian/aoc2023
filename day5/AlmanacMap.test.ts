import { AlmanacMap } from './AlmanacMap';

describe('AlmanacMap', () => {
    it('should be created from a string', () => {
        const map = AlmanacMap.fromString('50 98 2\n52 50 48');

        const conversionInstructions = map.getConversionInstructions();

        expect(conversionInstructions).toContainEqual({
            destination: 50,
            source: 98,
            range: 2,
        });
        expect(conversionInstructions).toContainEqual({
            destination: 52,
            source: 50,
            range: 48,
        });
    });

    it('should convert an incoming number at the start a range to a destination number', () => {
        const map = new AlmanacMap([
            {
                destination: 50,
                source: 98,
                range: 2,
            },
        ]);

        const destination = map.convert(98);

        expect(destination).toEqual(50);
    });

    it('should convert an incoming number within a range to a destination number', () => {
        const map = new AlmanacMap([
            {
                destination: 50,
                source: 98,
                range: 2,
            },
        ]);

        const destination = map.convert(99);

        expect(destination).toEqual(51);
    });

    it('should not convert an incoming number at the top edge end of a range to a destination number', () => {
        const map = new AlmanacMap([
            {
                destination: 50,
                source: 98,
                range: 2,
            },
        ]);

        const destination = map.convert(100);

        expect(destination).toEqual(100);
    });

    it('should allow the source to be 0', () => {
        const map = new AlmanacMap([
            {
                destination: 50,
                source: 0,
                range: 2,
            },
        ]);

        expect(map.convert(0)).toEqual(50);
        expect(map.convert(1)).toEqual(51);
        expect(map.convert(2)).toEqual(2);
    });

    it('should allow the destination to be 0', () => {
        const map = new AlmanacMap([
            {
                destination: 0,
                source: 50,
                range: 2,
            },
        ]);

        expect(map.convert(50)).toEqual(0);
        expect(map.convert(51)).toEqual(1);
        expect(map.convert(52)).toEqual(52);
    });
});
