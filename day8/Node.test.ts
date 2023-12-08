import { Node } from './Node';

describe('Node', () => {
    describe('isStartPoint', () => {
        it('should return true if the nodes name is AAA', () => {
            expect(new Node('AAA').isStartPoint()).toBe(true);
        });

        it('should return true if the nodes name ends with A', () => {
            expect(new Node('11A').isStartPoint()).toBe(true);
        });

        it('should return false if the nodes name is not AAA', () => {
            expect(new Node('ZZZ').isStartPoint()).toBe(false);
        });
    });

    describe('isEndPoint', () => {
        it('should return true if the nodes name is ZZZ', () => {
            expect(new Node('ZZZ').isEndPoint()).toBe(true);
        });

        it('should return true if the nodes name ends with Z', () => {
            expect(new Node('11Z').isEndPoint()).toBe(true);
        });

        it('should return false if the nodes name is not ZZZ', () => {
            expect(new Node('AAA').isEndPoint()).toBe(false);
        });
    });
});
