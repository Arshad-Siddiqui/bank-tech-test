export default class BankAccount {
  history: number[] = [];

  get balance(): number {
    return this.history.reduce((a, b) => a + b, 0);
  }

  deposit(amount: number) {
    this.history.push(amount);
  }

  withdraw(amount: number) {
    this.history.push(-amount);
  }

  get balanceHistory(): number[] {
    let balance: number = 0;
    return this.history.map((transaction) => {
      balance += transaction;
      return balance
    });
  }
}
