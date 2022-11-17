import BankAccount from "./bankAccount";
import bankHeader from "./bankHeader";

export default class Banklogger {
  constructor(
    private account: BankAccount,
    private getDate: Function
    ) {}

  get transactions(): string {
    let transactionArray = this.account.history.map((transaction, i) => {
      if (transaction > 0) {
        return this.depositString(transaction, this.account.balanceHistory[i]);
      } else {
        return this.withdrawString(transaction, this.account.balanceHistory[i]);
      }
    });

    return `${bankHeader()}\n${transactionArray.join("\n")}`;
  }

  private depositString(transactionAmmount: number, balance: number): string {
    return `${this.getDate()} || ${transactionAmmount.toFixed(
      2
    )} || || ${balance.toFixed(2)}`;
  }

  private withdrawString(transactionAmmount: number, balance: number): string {
    return `${this.getDate()} || || ${(-transactionAmmount).toFixed(
      2
    )} || ${balance.toFixed(2)}`;
  }

  log() {
    console.log(this.transactions);
  }
}
