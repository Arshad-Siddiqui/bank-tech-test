"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor() {
        this.history = [];
    }
    get balance() {
        return this.history.reduce((a, b) => a + b, 0);
    }
    deposit(amount) {
        this.history.push(amount);
    }
    withdraw(amount) {
        this.history.push(-amount);
    }
    get balanceHistory() {
        let balance = 0;
        return this.history.map((transaction) => {
            balance += transaction;
            return balance;
        });
    }
}
exports.default = BankAccount;
