import { Node } from './Node';

export const getNodesFromInput = (input: string): { nodes: Map<string, Node>; starters: Node[] } => {
    const constructionMap = new Map<string, { node: Node; right: string; left: string }>();

    input.split('\n').forEach((line) => {
        const match = /([a-zA-Z0-9]+?)\s+=\s+\(([a-zA-Z0-9]+?)[\s,]+([a-zA-Z0-9]+?)\)/.exec(line);
        if (match?.length === 4) {
            const [, name, left, right] = match;
            constructionMap.set(name, { node: new Node(name), right, left });
        }
    });

    const nodes = new Map<string, Node>();
    const starters: Node[] = [];

    constructionMap.forEach(({ node, right, left }) => {
        node.right = constructionMap.get(right)?.node;
        node.left = constructionMap.get(left)?.node;

        if (node.isStartPoint()) {
            starters.push(node);
        }
        nodes.set(node.name, node);
    });

    return { nodes, starters };
};
