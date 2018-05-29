import {computeFrom} from '../computeFrom'

test("computeFrom::list", () => {
    const data = computeFrom([1, 2, 3])();
    expect(data).toEqual([1, 2, 3])
});