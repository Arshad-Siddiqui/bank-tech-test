export default class BankAccount {
  balance: number = 0;
  history: number[] = [];

  deposit (amount: number) {
    this.balance += amount;
    this.history.push(amount);
  }

  withdraw (amount: number) {
    this.balance -= amount;
    this.history.push(-amount);
  }
}