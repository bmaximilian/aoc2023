import { InstructionPointer } from './InstructionPointer';
import { getNodesFromInput } from './getNodesFromInput';

const greatestCommonDenominator = (numbers: number[]): number => {
    return numbers.reduce((a, b) => {
        let multiple = a;
        while (multiple % b !== 0) {
            multiple += a;
        }
        return multiple;
    });
};

export const traverseMap = (input: string): number => {
    const directions = input.trim().split('\n')[0];
    const { starters: parallelPaths } = getNodesFromInput(input);

    const individualSteps = parallelPaths.map((p) => {
        const pointer = new InstructionPointer(directions);
        let currentNode = p;

        let steps = 0;

        while (!currentNode.isEndPoint()) {
            steps += 1;
            const direction = pointer.next() === 'R' ? 'right' : 'left';
            const nextNode = currentNode[direction];

            if (!nextNode) {
                throw new Error(`Node ${currentNode.name} has no ${direction} node`);
            }

            currentNode = nextNode;
        }

        return steps;
    });

    return greatestCommonDenominator(individualSteps);
};
