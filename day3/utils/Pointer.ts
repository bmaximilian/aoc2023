export class Pointer {
    private readonly totalElementCount: number;
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

    public moveBack(): this {
        const { x, y } = this.currentNode;

        if (x > 0) {
            this.currentNode = { x: x - 1, y };
        } else if (y > 0) {
            this.currentNode = { x: this.matrix[y - 1].length - 1, y: y - 1 };
        } else {
            throw new Error('Cannot move pointer any further back');
        }

        return this;
    }

    public markCurrentNodeAsChecked(): this {
        this.checkedNodes.add(this.nodeToString(this.currentNode));

        return this;
    }

    public hasCheckedAllNodes(): boolean {
        return this.checkedNodes.size === this.totalElementCount;
    }

    public isFirstNode(): boolean {
        return this.currentNode.x === 0 && this.currentNode.y === 0;
    }

    public hasCurrentNodeBeenChecked(): boolean {
        return this.checkedNodes.has(this.nodeToString(this.currentNode));
    }

    private nodeToString(node = this.currentNode): string {
        const { x, y } = node;
        return `${x},${y}`;
    }

    public isCurrentNodeSymbol(): boolean {
        return /[^a-zA-Z0-9\s.]/.test(this.getCurrentNode());
    }

    public isCurrentNodeGear(): boolean {
        return this.getCurrentNode() === '*';
    }

    public isCurrentNodeDigit(): boolean {
        return /[0-9]/.test(this.getCurrentNode());
    }

    private getCurrentNode(): string {
        const { x, y } = this.currentNode;
        return this.matrix[y][x];
    }

    public getUncheckedAdjacentNumbers(): number[] {
        this.markCurrentNodeAsChecked();
        if (!this.isCurrentNodeSymbol()) {
            return [];
        }

        const adjacentNumbers: number[] = [];

        const nodesToCheck = [
            { x: this.currentNode.x - 1, y: this.currentNode.y }, // left
            { x: this.currentNode.x + 1, y: this.currentNode.y }, // right
            { x: this.currentNode.x, y: this.currentNode.y - 1 }, // top
            { x: this.currentNode.x, y: this.currentNode.y + 1 }, // bottom
            { x: this.currentNode.x - 1, y: this.currentNode.y - 1 }, // top-left
            { x: this.currentNode.x - 1, y: this.currentNode.y + 1 }, // bottom-left
            { x: this.currentNode.x + 1, y: this.currentNode.y - 1 }, // top-right
            { x: this.currentNode.x + 1, y: this.currentNode.y + 1 }, // bottom-right
        ];

        nodesToCheck.forEach((node) => this.checkNode(node, adjacentNumbers));

        return adjacentNumbers;
    }

    private checkNode(node: { x: number; y: number }, adjacentNumbers: number[]): void {
        if (this.canMoveTo(node) && !this.didCheckTheNode(node)) {
            const startingNode = this.currentNode;
            this.moveTo(node);

            const partNumber = this.collectNumber();

            if (partNumber !== null) {
                adjacentNumbers.push(partNumber);
            }

            this.markCurrentNodeAsChecked();
            this.moveTo(startingNode);
        }
    }

    private collectNumber(): number | null {
        const digits = [];
        if (!this.isCurrentNodeDigit()) {
            return null;
        }

        // Move pointer to the start of the number
        while (this.isCurrentNodeDigit() && !this.isFirstNode()) {
            this.moveBack();
        }

        // We moved back to the start of the row or one too many times
        if (!this.isCurrentNodeDigit()) {
            this.move();
        }

        // Collect the digits of the number from the start
        while (this.isCurrentNodeDigit()) {
            digits.push(this.getCurrentNode());
            try {
                this.markCurrentNodeAsChecked();
                this.move();
            } catch (e) {
                break;
            }
        }

        return digits.length > 0 ? parseInt(digits.join(''), 10) : null;
    }

    private canMoveTo(node: { x: number; y: number }): boolean {
        return node.y >= 0 && node.y < this.matrix.length && node.x >= 0 && node.x < this.matrix[node.y].length;
    }

    private didCheckTheNode(node: { x: number; y: number }): boolean {
        return this.checkedNodes.has(this.nodeToString(node));
    }

    private moveTo(node: { x: number; y: number }): void {
        this.currentNode = node;
    }
}
