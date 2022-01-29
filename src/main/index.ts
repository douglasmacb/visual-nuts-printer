import { PrintDivisibleNumbers } from '../data/print-divisible-numbers'
import { PrintFirstNumbers } from '../data/print-first-numbers'
import { Printer } from '../domain/usecases/printer'
import { NumbersUtils } from '../utils/numbers-utils'

const printNumbers = (): void => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]

  const printers: Printer[] = [new PrintDivisibleNumbers(NumbersUtils.ONE, NumbersUtils.HUNDRED), new PrintFirstNumbers(numbers, NumbersUtils.THREE)]

  for (const printer of printers) {
    printer.print().toConsole()
  }
}

printNumbers()
