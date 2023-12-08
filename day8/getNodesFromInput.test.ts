import { Node } from './Node';
import { getNodesFromInput } from './getNodesFromInput';

describe('getNodesFromInput', () => {
    it('should return an array of nodes', () => {
        const input = `
            RL

            AAA = (BBB, CCC)
            BBB = (DDD, EEE)
            CCC = (ZZZ, GGG)
            DDD = (DDD, DDD)
            EEE = (EEE, EEE)
            GGG = (GGG, GGG)
            ZZZ = (ZZZ, ZZZ)
        `;

        const aaaNode = new Node('AAA');
        const bbbNode = new Node('BBB');
        const cccNode = new Node('CCC');
        const dddNode = new Node('DDD');
        const eeeNode = new Node('EEE');
        const gggNode = new Node('GGG');
        const zzzNode = new Node('ZZZ');

        aaaNode.left = bbbNode;
        aaaNode.right = cccNode;

        bbbNode.left = dddNode;
        bbbNode.right = eeeNode;

        cccNode.left = zzzNode;
        cccNode.right = gggNode;

        dddNode.right = dddNode;
        dddNode.left = dddNode;

        eeeNode.right = eeeNode;
        eeeNode.left = eeeNode;

        gggNode.right = gggNode;
        gggNode.left = gggNode;

        zzzNode.right = zzzNode;
        zzzNode.left = zzzNode;

        const { nodes } = getNodesFromInput(input);

        expect(nodes.get('AAA')).toEqual(aaaNode);
        expect(nodes.get('BBB')).toEqual(bbbNode);
        expect(nodes.get('CCC')).toEqual(cccNode);
        expect(nodes.get('DDD')).toEqual(dddNode);
        expect(nodes.get('EEE')).toEqual(eeeNode);
        expect(nodes.get('GGG')).toEqual(gggNode);
        expect(nodes.get('ZZZ')).toEqual(zzzNode);
    });

    it('should return the starter nodes', () => {
        const input = `
            RL

            AAA = (BBB, CCC)
            BBB = (DDD, EEE)
            CCC = (ZZZ, GGG)
            DDD = (DDD, DDD)
            EEE = (EEE, EEE)
            GGG = (GGG, GGG)
            ZZZ = (ZZZ, ZZZ)
        `;

        const { starters } = getNodesFromInput(input);
        expect(starters).toHaveLength(1);
        expect(starters[0].name).toEqual('AAA');
    });

    it('should process alphanumeric nodes', () => {
        const input = `
            RL

            11A = (11A, 11A)
        `;

        const { starters } = getNodesFromInput(input);
        expect(starters).toHaveLength(1);
        expect(starters[0].name).toEqual('11A');
    });
});
