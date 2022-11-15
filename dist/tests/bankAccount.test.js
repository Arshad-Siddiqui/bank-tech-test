"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = __importDefault(require("../bankAccount"));
describe("BankAccount", () => {
    it("should take a deposit and return the balance", () => {
        const account = new bankAccount_1.default();
        account.deposit(100);
        expect(account.balance).toBe(100);
    });
    it("should take multiple deposits and return the balance", () => {
        const account = new bankAccount_1.default();
        account.deposit(100);
        account.deposit(200);
        expect(account.balance).toBe(300);
    });
    it("should take a withdrawal and return the balance", () => {
        const account = new bankAccount_1.default();
        account.deposit(100);
        account.withdraw(50);
        expect(account.balance).toBe(50);
    });
    it("should store the history of transactions", () => {
        const account = new bankAccount_1.default();
        account.deposit(100);
        account.withdraw(50);
        expect(account.history).toEqual([100, -50]);
    });
    it("should store history of balances", () => {
        const account = new bankAccount_1.default();
        account.deposit(100);
        account.withdraw(50);
        account.deposit(200);
        expect(account.balanceHistory).toEqual([100, 50, 250]);
    });
});
