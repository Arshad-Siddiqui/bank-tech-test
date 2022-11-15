"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bankHeader_1 = __importDefault(require("./bankHeader"));
const getDate_1 = __importDefault(require("./getDate"));
class Banklogger {
    constructor(account) {
        this.account = account;
    }
    get transactions() {
        let transactionArray = this.account.history.map((transaction, i) => {
            if (transaction > 0) {
                return this.depositString(transaction, this.account.balanceHistory[i]);
            }
            else {
                return this.withdrawString(transaction, this.account.balanceHistory[i]);
            }
        });
        return `${(0, bankHeader_1.default)()}\n${transactionArray.join("\n")}`;
    }
    depositString(transactionAmmount, balance) {
        return `${(0, getDate_1.default)()} || ${transactionAmmount.toFixed(2)} || || ${balance.toFixed(2)}`;
    }
    withdrawString(transactionAmmount, balance) {
        return `${(0, getDate_1.default)()} || || ${(-transactionAmmount).toFixed(2)} || ${balance.toFixed(2)}`;
    }
}
exports.default = Banklogger;
