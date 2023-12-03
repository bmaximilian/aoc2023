import { Pointer } from './Pointer';

describe('Pointer', () => {
    describe('move operations', () => {
        const matrix = [
            ['.', '.'],
            ['.', '.'],
        ];
        let pointer: Pointer;

        beforeEach(() => {
            pointer = new Pointer(matrix);
        });

        describe('move', () => {
            it('should throw an error if the pointer is moved out of bounds', () => {
                pointer.move();
                pointer.move();
                pointer.move();
                expect(() => pointer.move()).toThrowError('Cannot move pointer any further');
            });
        });

        describe('hasCheckedAllNodes', () => {
            it('should return false if not all nodes have been checked', () => {
                expect(pointer.hasCheckedAllNodes()).toBe(false);
            });

            it('should return true if all nodes have been checked', () => {
                pointer.markCurrentNodeAsChecked();
                pointer.move().markCurrentNodeAsChecked();
                pointer.move().markCurrentNodeAsChecked();
                pointer.move().markCurrentNodeAsChecked();
                expect(pointer.hasCheckedAllNodes()).toBe(true);
            });
        });

        describe('isFirstNode', () => {
            it('should return true if the pointer is at the first node', () => {
                expect(pointer.isFirstNode()).toBe(true);
            });

            it('should return false if the pointer did already move', () => {
                pointer.move();
                expect(pointer.isFirstNode()).toBe(false);
            });
        });

        describe('hasCurrentNodeBeenChecked', () => {
            it('should return false if the current node has not been checked', () => {
                expect(pointer.hasCurrentNodeBeenChecked()).toBe(false);
            });

            it('should return true if the current node has been checked', () => {
                pointer.markCurrentNodeAsChecked();
                expect(pointer.hasCurrentNodeBeenChecked()).toBe(true);
            });
        });
    });

    describe('node operations', () => {
        describe('isCurrentNodeSymbol', () => {
            it('should return false if the current node is a number', () => {
                const pointer = new Pointer([['1']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(false);
            });

            it('should return false if the current node is a letter', () => {
                const pointer = new Pointer([['a']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(false);
            });

            it('should return false if the current node is a dot', () => {
                const pointer = new Pointer([['.']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(false);
            });

            it('should return true if the current node is a star', () => {
                const pointer = new Pointer([['*']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(true);
            });

            it('should return true if the current node is a hashtag', () => {
                const pointer = new Pointer([['#']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(true);
            });

            it('should return true if the current node is a dollar sign', () => {
                const pointer = new Pointer([['$']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(true);
            });

            it('should return true if the current node is a plus sign', () => {
                const pointer = new Pointer([['*']]);
                expect(pointer.isCurrentNodeSymbol()).toBe(true);
            });
        });

        describe('getUncheckedAdjacentNumbers', () => {
            it('should return an empty array if no numbers are found', () => {
                const pointer = new Pointer([['.', '.']]);
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([]);
            });

            it('should return a single number that is next to the current node', () => {
                const pointer = new Pointer([['#', '1']]);
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([1]);
            });

            it('should find numbers with multiple digits', () => {
                const pointer = new Pointer([['#', '1', '2']]);
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([12]);
            });

            it('should return a single number that is below the current node', () => {
                const pointer = new Pointer([['#'], ['1']]);
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([1]);
            });

            it('should find numbers below nodes with multiple digits', () => {
                const pointer = new Pointer([
                    ['#', '.'],
                    ['1', '2'],
                ]);
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([12]);
            });

            it('should find numbers left to nodes', () => {
                const pointer = new Pointer([['1', '2', '#', '.']]);
                pointer.move().move();
                expect(pointer.getUncheckedAdjacentNumbers()).toEqual([12]);
            });

            it('should find numbers below nodes in reverse', () => {
                const pointer = new Pointer([
                    ['.', '#'],
                    ['1', '2'],
                ]);
                expect(pointer.move().getUncheckedAdjacentNumbers()).toEqual([12]);
            });

            it('should find numbers diagonally', () => {
                const pointer = new Pointer([
                    ['.', '#', '.', '.'],
                    ['.', '.', '1', '2'],
                ]);
                expect(pointer.move().getUncheckedAdjacentNumbers()).toEqual([12]);
            });
        });
    });
});
