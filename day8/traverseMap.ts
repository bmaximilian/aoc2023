import { InstructionPointer } from './InstructionPointer';
import { getNodesFromInput } from './getNodesFromInput';

export const traverseMap = (input: string): number => {
    const pointer = new InstructionPointer(input.trim().split('\n')[0]);
    const nodes = getNodesFromInput(input);

    let currentNode = nodes.get('AAA');
    let steps = 0;

    if (!currentNode) {
        throw new Error('Start node (AAA) not found');
    }

    while (!currentNode?.isEndPoint()) {
        steps += 1;
        const prevNodeName = currentNode.name;
        const direction = pointer.next() === 'R' ? 'right' : 'left';

        currentNode = currentNode[direction];

        if (!currentNode) {
            throw new Error(`Node ${prevNodeName} has no ${direction} node`);
        }
    }

    return steps;
};
