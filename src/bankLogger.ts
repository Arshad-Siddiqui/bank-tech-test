import BankAccount from "./bankAccount";
import getDate from "./getDate";

export default class Banklogger {
  constructor(private account: BankAccount) {}

  get transactions(): string {
    let transactionArray = this.account.history.map((transaction, i) => {
      if (transaction > 0) {
        return `${getDate()} || ${transaction.toFixed(
          2
        )} || || ${this.account.balanceHistory[i].toFixed(2)}`;
      } else {
        return `${getDate()} || || ${transaction.toFixed(
          2
        )} || ${this.account.balanceHistory[i].toFixed(2)}`;
      }
    });

    return `${this.header}\n${transactionArray.join("\n")}`;
  }

  get header(): string {
    return "date || credit || debit || balance";
  }
}
