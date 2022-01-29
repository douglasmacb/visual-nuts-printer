import { Messages } from '../domain/models/messages'
import { Printer } from '../domain/usecases/printer'

export class PrintFirstNumbers implements Printer {

    constructor (private readonly numbers: number[], private readonly stopNumber: number) {}

    print (): Messages {
        const messages = new Messages()
        
        for (let number = 0; number < this.stopNumber && number < this.numbers.length; number++) {
            messages.add(this.numbers[number])
        }
        return messages
    }
}