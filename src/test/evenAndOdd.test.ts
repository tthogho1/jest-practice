import { evenAndOdd } from '../evenAndOdd'

test('numList width even or odd', () => {
    const numList = [0, 1, 2]
    const result = evenAndOdd(numList)
    console.log(result);
    expect(result).toStrictEqual([
        { isEven: true },
        { isEven: false },
        { isEven: true }
    ])
})