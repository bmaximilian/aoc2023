export class Node {
    public right?: Node;
    public left?: Node;

    constructor(public readonly name: string) {}

    public isStartPoint(): boolean {
        return this.name === 'AAA';
    }

    public isEndPoint(): boolean {
        return this.name === 'ZZZ';
    }
}
