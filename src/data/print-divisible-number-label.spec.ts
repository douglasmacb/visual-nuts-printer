import { PrintDivisibleNumberLabel } from './print-divisible-number-label'

const makeSut = () => {
    const sut = new PrintDivisibleNumberLabel(1, 15)

    return {
        sut
    }
}

describe('PrintDivisibleNumberLabel', () => {
    test('Should print the correct label', () => {
        const { sut } = makeSut()
        const numbers = sut.print()
        expect(numbers.get()).toEqual(["Visual", "Nuts", "Visual", "Visual", "Nuts", "Visual", "Visual Nuts"])
    })
})