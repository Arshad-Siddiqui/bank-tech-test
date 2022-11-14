import BankAccount from './bankAccount';

export default class Banklogger {
  constructor(private account: BankAccount) {}

  transactions(): string {
    return ''
  }
}