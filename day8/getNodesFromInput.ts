import { Node } from './Node';

export const getNodesFromInput = (input: string): Map<string, Node> => {
    const constructionMap = new Map<string, { node: Node; right: string; left: string }>();

    input.split('\n').forEach((line) => {
        const match = /([a-zA-Z]+?)\s+=\s+\(([a-zA-Z]+?)[\s,]+([a-zA-Z]+?)\)/.exec(line);
        if (match?.length === 4) {
            const [, name, left, right] = match;
            constructionMap.set(name, { node: new Node(name), right, left });
        }
    });

    const finalMap = new Map<string, Node>();
    constructionMap.forEach(({ node, right, left }) => {
        node.right = constructionMap.get(right)?.node;
        node.left = constructionMap.get(left)?.node;

        finalMap.set(node.name, node);
    });

    return finalMap;
};
