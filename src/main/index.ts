import { PrintDivisibleNumbers } from '../data/print-divisible-numbers'
import { PrintFirstNumbers } from '../data/print-first-numbers'
import { Printer } from '../domain/usecases/printer'

const printNumbers = (): void => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]

  const printers: Printer[] = [new PrintDivisibleNumbers(1, 100), new PrintFirstNumbers(numbers, 3)]

  for (const printer of printers) {
    printer.print().toConsole()
  }
}

printNumbers()
