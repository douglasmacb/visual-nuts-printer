import { Messages } from '../models/messages'

export interface Printer {
  print (): Messages
}
