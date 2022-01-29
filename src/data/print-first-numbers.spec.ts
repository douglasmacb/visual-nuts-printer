import { PrintFirstNumbers } from './print-first-numbers'

const makeFakeNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const makeSut = () => {
    const sut = new PrintFirstNumbers(makeFakeNumbers, 5)

    return {
        sut
    }
}

describe('PrintDivisibleNumbers', () => {
    test('Should print the first 5 numbers of the array of numbers', () => {
        const { sut } = makeSut()
        const numbers = sut.print()
        expect(numbers.get()).toHaveLength(5)
    })
})