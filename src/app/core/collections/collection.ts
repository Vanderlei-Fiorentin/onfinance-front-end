export abstract class Collection<T> {

    data: T[] = [];

    constructor() { }

    push(data: T) {
        this.data.push(data);
    };

    pushAll(data: T[]) {
        this.data = data;
    };

    splice(index: number) {
        this.data.splice(index, 1);
    };

    all(): T[] {
        return this.data;
    }

    reset() {
        this.data = [];
    }
}