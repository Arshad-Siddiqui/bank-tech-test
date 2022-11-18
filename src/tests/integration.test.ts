import Banklogger from "../bankLogger";
import BankAccount from "../bankAccount";

function getDate () {
  return '12/12/12';
}

describe("BankLogger", () => {
  it("should return the header string", () => {
    const account = new BankAccount();
    const logger = new Banklogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
  });
  it("should return a list of deposits in expected format", () => {
    const account = new BankAccount();
    account.deposit(100);
    account.deposit(200);
    const logger = new Banklogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
    expect(logger.transactions).toContain(
      `12/12/12 || 100.00 || || 100.00`
    );
    expect(logger.transactions).toContain(
      `12/12/12 || 200.00 || || 300.00`
    );
  });

  it("should return a list of deposits and withdrawals in expected format", () => {
    const account = new BankAccount();
    account.deposit(100);
    account.withdraw(50);
    account.deposit(200);
    const logger = new Banklogger(account, getDate);
    expect(logger.transactions).toContain("date || credit || debit || balance");
    expect(logger.transactions).toContain(
      `12/12/12 || 100.00 || || 100.00`
    );
    expect(logger.transactions).toContain(
      `12/12/12 || || 50.00 || 50.00`
    );
    expect(logger.transactions).toContain(
      `12/12/12 || 200.00 || || 250.00`
    );
  });
});