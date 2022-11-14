export default class BankAccount {
  balance: number;
  
  constructor () {
    this.balance = 0;
  }

  deposit (amount: number) {
    this.balance += amount;
  }

  withdraw (amount: number) {
    this.balance -= amount;
  }
}