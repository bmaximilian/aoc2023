import { InstructionPointer } from './InstructionPointer';

describe('InstructionPointer', () => {
    it('should determine the first instruction', () => {
        expect(new InstructionPointer('RLRR').next()).toEqual('R');
    });

    it('should iterate through the instructions', () => {
        const pointer = new InstructionPointer('RLRR');

        expect(pointer.next()).toEqual('R');
        expect(pointer.next()).toEqual('L');
        expect(pointer.next()).toEqual('R');
        expect(pointer.next()).toEqual('R');
    });

    it('should start over if the instruction list ended', () => {
        const pointer = new InstructionPointer('RLR');

        expect(pointer.next()).toEqual('R');
        expect(pointer.next()).toEqual('L');
        expect(pointer.next()).toEqual('R');
        expect(pointer.next()).toEqual('R');
        expect(pointer.next()).toEqual('L');
    });
});
