import { InstructionPointer } from './InstructionPointer';
import { Node } from './Node';
import { getNodesFromInput } from './getNodesFromInput';

function printProgress(progress: string) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(progress);
}

const allPathsAreAtEnd = (paths: Node[]) => {
    const pathsInProgress = paths.filter((p) => !p.isEndPoint());

    return pathsInProgress.length === 0;
};

export const traverseMap = (input: string): number => {
    const pointer = new InstructionPointer(input.trim().split('\n')[0]);
    const { starters: parallelPaths } = getNodesFromInput(input);

    let steps = 0;

    while (!allPathsAreAtEnd(parallelPaths)) {
        steps += 1;
        if (steps % 10000 === 0) {
            printProgress(`${steps} steps - ${steps.toString().length} digits`);
        }

        const direction = pointer.next() === 'R' ? 'right' : 'left';

        parallelPaths.forEach((path, i) => {
            const nextNode = path[direction];

            if (!nextNode) {
                throw new Error(`Node ${path.name} has no ${direction} node`);
            }

            parallelPaths[i] = nextNode;
        });
    }

    return steps;
};
