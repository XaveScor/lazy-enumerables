export function filter(pred) {
    return function*(enumerable) {
        for (const el of enumerable) {
            if (pred(el)) {
                yield el
            }
        }
    }
}
