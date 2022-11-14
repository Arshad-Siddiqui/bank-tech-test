export default class BankAccount {
  balance: number = 0;
  history: number[] = [];

  deposit(amount: number) {
    this.balance += amount;
    this.history.push(amount);
  }

  withdraw(amount: number) {
    this.balance -= amount;
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
