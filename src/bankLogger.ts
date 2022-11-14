import BankAccount from './bankAccount';

export default class Banklogger {
  constructor(private account: BankAccount) {}

  get transactions(): string {
    return 'date || credit || debit || balance'
  }
}