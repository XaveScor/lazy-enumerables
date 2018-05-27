export function map(pred) {
    return function*(enumerable) {
        for (const el of enumerable) {
            const total = pred(el)
            yield total
        }
    }
}
