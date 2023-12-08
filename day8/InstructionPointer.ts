export class InstructionPointer {
    private index = -1;

    constructor(private instructions: string) {}

    public next(): string {
        this.index += 1;

        if (this.index === this.instructions.length) {
            this.index = 0;
        }

        return this.instructions.charAt(this.index);
    }
}
