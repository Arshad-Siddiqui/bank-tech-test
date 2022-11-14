"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor() {
        this.balance = 0;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(amount);
    }
    withdraw(amount) {
        this.balance -= amount;
        this.history.push(-amount);
    }
    get balanceHistory() {
        let balanceHistory = [];
        let balance = 0;
        this.history.forEach((transaction) => {
            balance += transaction;
            balanceHistory.push(balance);
        });
        return balanceHistory;
    }
}
exports.default = BankAccount;
