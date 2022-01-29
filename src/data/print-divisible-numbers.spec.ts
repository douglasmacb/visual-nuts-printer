import { PrintDivisibleNumbers } from './print-divisible-numbers'

const makeSut = () => {
    const sut = new PrintDivisibleNumbers(1, 15)

    return {
        sut
    }
}

describe('PrintDivisibleNumbers', () => {
    test('Should print divisible numbers from 1 to 15', () => {
        const { sut } = makeSut()
        const numbers = sut.print()
        expect(numbers.get()).toEqual(["Visual", "Nuts", "Visual", "Visual", "Nuts", "Visual", "Visual Nuts"])
    })
})