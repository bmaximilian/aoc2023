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

        expect(getNodesFromInput(input).get('AAA')).toEqual(aaaNode);
        expect(getNodesFromInput(input).get('BBB')).toEqual(bbbNode);
        expect(getNodesFromInput(input).get('CCC')).toEqual(cccNode);
        expect(getNodesFromInput(input).get('DDD')).toEqual(dddNode);
        expect(getNodesFromInput(input).get('EEE')).toEqual(eeeNode);
        expect(getNodesFromInput(input).get('GGG')).toEqual(gggNode);
        expect(getNodesFromInput(input).get('ZZZ')).toEqual(zzzNode);
    });
});
