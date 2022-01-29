import { Messages } from '../domain/models/messages'
import { Printer } from '../domain/usecases/printer'
import { LabelUtils } from '../utils/label-utils'
import { NumbersUtils } from '../utils/numbers-utils'

export class PrintDivisibleNumbers implements Printer {
    
    constructor (private readonly from: number, private readonly to: number) {}

    print (): Messages {

        const messages = new Messages()
        
        for (let number = this.from; number <= this.to; number++) {
            if (number % NumbersUtils.THREE === NumbersUtils.ZERO && number % NumbersUtils.FIVE === NumbersUtils.ZERO) {
                messages.add(LabelUtils.VISUAL_NUTS)
            } else if (number % NumbersUtils.FIVE === NumbersUtils.ZERO) {
                messages.add(LabelUtils.NUTS)
            } else if (number % NumbersUtils.THREE === NumbersUtils.ZERO) {
                messages.add(LabelUtils.VISUAL)
            }
        }

        return messages
    }

}