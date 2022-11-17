"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bankLogger_1 = __importDefault(require("../bankLogger"));
const getDate_1 = __importDefault(require("../getDate"));
const bankAccountMaker = () => {
    return {
        balance: 0,
        history: [],
        balanceHistory: [],
        deposit(amount) {
            return;
        },
        withdraw(amount) {
            return;
        },
    };
};
describe("BankLogger", () => {
    it("should return the header string", () => {
        const account = bankAccountMaker();
        const logger = new bankLogger_1.default(account, getDate_1.default);
        expect(logger.transactions).toContain("date || credit || debit || balance");
    });
    it("should return a list of deposits in expected format", () => {
        let currentDate = (0, getDate_1.default)();
        const account = bankAccountMaker();
        account.balance = 300;
        account.history = [100, 200];
        account.balanceHistory = [100, 300];
        const logger = new bankLogger_1.default(account, getDate_1.default);
        expect(logger.transactions).toContain("date || credit || debit || balance");
        expect(logger.transactions).toContain(`${currentDate} || 100.00 || || 100.00`);
        expect(logger.transactions).toContain(`${currentDate} || 200.00 || || 300.00`);
    });
    it("should return a list of deposits and withdrawals in expected format", () => {
        let currentDate = (0, getDate_1.default)();
        const account = bankAccountMaker();
        account.history = [100, -50, 200];
        account.balanceHistory = [100, 50, 250];
        const logger = new bankLogger_1.default(account, getDate_1.default);
        expect(logger.transactions).toContain("date || credit || debit || balance");
        expect(logger.transactions).toContain(`${currentDate} || 100.00 || || 100.00`);
        expect(logger.transactions).toContain(`${currentDate} || || 50.00 || 50.00`);
        expect(logger.transactions).toContain(`${currentDate} || 200.00 || || 250.00`);
    });
});
