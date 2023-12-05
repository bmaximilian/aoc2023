export interface ConversionInstruction {
    destination: number;
    source: number;
    range: number;
}

export class AlmanacMap {
    public static fromString(input: string): AlmanacMap {
        const instructions = input.split('\n').reduce<ConversionInstruction[]>((instructions, line) => {
            if (line.trim() === '') {
                return instructions;
            }

            const [destination, source, range] = line.trim().split(' ').map(Number);
            return [
                ...instructions,
                {
                    destination,
                    range,
                    source,
                },
            ];
        }, []);

        return new AlmanacMap(instructions);
    }

    constructor(private readonly instructions: ConversionInstruction[]) {}

    public getConversionInstructions(): ConversionInstruction[] {
        return this.instructions;
    }

    public convert(source: number): number {
        const instruction = this.instructions.find(
            (instruction) => source >= instruction.source && source < instruction.source + instruction.range,
        );

        if (!instruction) {
            return source;
        }

        const rangeDeviation = source - instruction.source;

        return instruction.destination + rangeDeviation;
    }
}
