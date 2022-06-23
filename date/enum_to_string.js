export enum Direction {
    none,
    left = 1,
    right = 2,
    top = 4,
    bottom = 8
}

export namespace Direction {
    export function toString(dir: Direction): string {
        return Direction[dir];
    }

    export function fromString(dir: string): Direction {
        return (Direction as any)[dir];
    }
}

console.log("Direction.toString(Direction.top) = " + Direction.toString(Direction.top));
// Direction.toString(Direction.top) = top
console.log('Direction.fromString("top") = ' + Direction.fromString("top"));
// Direction.fromString("top") = 4
console.log('Direction.fromString("xxx") = ' + Direction.fromString("unknown"));
// Direction.fromString("xxx") = undefined