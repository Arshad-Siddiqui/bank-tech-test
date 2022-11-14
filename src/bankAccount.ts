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
    let balanceHistory: number[] = [];
    let balance: number = 0;
    this.history.forEach((transaction) => {
      balance += transaction;
      balanceHistory.push(balance);
    });
    return balanceHistory;
  }
}
