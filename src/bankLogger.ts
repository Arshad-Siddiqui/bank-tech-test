import BankAccount from "./bankAccount";
import bankHeader from "./bankHeader";
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
        return `${getDate()} || || ${(-transaction).toFixed(
          2
        )} || ${this.account.balanceHistory[i].toFixed(2)}`;
      }
    });

    return `${bankHeader()}\n${transactionArray.join("\n")}`;
  }
}
