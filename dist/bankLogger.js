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
                return `${(0, getDate_1.default)()} || ${transaction.toFixed(2)} || || ${this.account.balanceHistory[i].toFixed(2)}`;
            }
            else {
                return `${(0, getDate_1.default)()} || || ${(-transaction).toFixed(2)} || ${this.account.balanceHistory[i].toFixed(2)}`;
            }
        });
        return `${(0, bankHeader_1.default)()}\n${transactionArray.join("\n")}`;
    }
}
exports.default = Banklogger;
