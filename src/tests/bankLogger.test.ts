import BankLogger from "../bankLogger";
import getDate from "../getDate";

const bankAccountMaker = (): BankAccount => {
  return {
    balance: 0,
    history: [],
    balanceHistory: [],
    deposit(amount: number) {
      return;
    },
    withdraw(amount: number) {
      return;
    },
  };
};

describe("BankLogger", () => {
  it("should return the header string", () => {
    const account = bankAccountMaker();
    const logger = new BankLogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
  });
  it("should return a list of deposits in expected format", () => {
    let currentDate = getDate();

    const account = bankAccountMaker();
    account.balance = 300;
    account.history = [100, 200];
    account.balanceHistory = [100, 300];

    const logger = new BankLogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
    expect(logger.transactions).toContain(
      `${currentDate} || 100.00 || || 100.00`
    );
    expect(logger.transactions).toContain(
      `${currentDate} || 200.00 || || 300.00`
    );
  });

  it("should return a list of deposits and withdrawals in expected format", () => {
    let currentDate = getDate();

    const account = bankAccountMaker();
    account.history = [100, -50, 200];
    account.balanceHistory = [100, 50, 250];
    const logger = new BankLogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
    expect(logger.transactions).toContain(
      `${currentDate} || 100.00 || || 100.00`
    );
    expect(logger.transactions).toContain(
      `${currentDate} || || 50.00 || 50.00`
    );
    expect(logger.transactions).toContain(
      `${currentDate} || 200.00 || || 250.00`
    );
  });
  describe('log', () => {
    it('should log the transactions', () => {
      const account = bankAccountMaker();
      const logger = new BankLogger(account, getDate);
      const spy = jest.spyOn(console, 'log');
      logger.log();
      expect(spy).toHaveBeenCalledWith(logger.transactions);
    })
  })
});

interface BankAccount {
  balance: number;
  history: number[];
  deposit(amount: number): void;
  withdraw(amount: number): void;
  balanceHistory: number[];
}
