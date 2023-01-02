import BankAccount from "./bankAccount";
export default class Banklogger {
  constructor(
    private account: BankAccount,
    ) {}

  get transactions(): string {
    let transactionArray = this.account.history.map((transaction, i) => {
      if (transaction > 0) {
        return this.depositString(transaction, this.account.balanceHistory[i]);
      } else {
        return this.withdrawString(transaction, this.account.balanceHistory[i]);
      }
    });

    return `${this.header()}\n${transactionArray.join("\n")}`;
  }

  private depositString(transactionAmount: number, balance: number): string {
    return `${this.getDate()} || ${transactionAmount.toFixed(
      2
    )} || || ${balance.toFixed(2)}`;
  }

  private withdrawString(transactionAmount: number, balance: number): string {
    return `${this.getDate()} || || ${(-transactionAmount).toFixed(
      2
    )} || ${balance.toFixed(2)}`;
  }

  private header(): string {
    return "date || credit || debit || balance";
  }

  log() {
    console.log(this.transactions);
  }

  getDate () {
    return new Date().toLocaleDateString();
  }
}
