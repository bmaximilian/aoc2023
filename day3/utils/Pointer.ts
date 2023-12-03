export class Pointer {
    private totalElementCount: number;
    private currentNode = { x: 0, y: 0 };
    private checkedNodes = new Set<string>();

    constructor(private matrix: string[][]) {
        this.totalElementCount = matrix.reduce((acc, row) => acc + row.length, 0);
    }

    public move(): this {
        const { x, y } = this.currentNode;

        if (x < this.matrix[y].length - 1) {
            this.currentNode = { x: x + 1, y };
        } else if (y < this.matrix.length - 1) {
            this.currentNode = { x: 0, y: y + 1 };
        } else {
            throw new Error('Cannot move pointer any further');
        }

        return this;
    }

    public markCurrentNodeAsChecked(): this {
        this.checkedNodes.add(this.currentNodeToString());

        return this;
    }

    public hasCheckedAllNodes(): boolean {
        return this.checkedNodes.size === this.totalElementCount;
    }

    public isFirstNode(): boolean {
        return this.currentNode.x === 0 && this.currentNode.y === 0;
    }

    public hasCurrentNodeBeenChecked(): boolean {
        return this.checkedNodes.has(this.currentNodeToString());
    }

    private currentNodeToString(): string {
        const { x, y } = this.currentNode;
        return `${x},${y}`;
    }

    public isCurrentNodeSymbol(): boolean {
        return /[^a-zA-Z0-9\s.]/.test(this.getCurrentNode());
    }

    private getCurrentNode(): string {
        const { x, y } = this.currentNode;
        return this.matrix[y][x];
    }
}
