import BankLogger from '../bankLogger'
import getDate from '../getDate'

const bankAccountMaker = (): BankAccount => {
  return {
    balance: 0,
    history: [],
    deposit (amount: number) {return},
    withdraw (amount: number) {return},
    get balanceHistory (): number[] {return []}
  }
}

describe('BankLogger', () => {
  it('should return the header string', () => {
    const account = bankAccountMaker();
    const logger = new BankLogger(account);
    expect(logger.header).toContain('date || credit || debit || balance')
  })
  it('should return a list of deposits in expected format', () => {
    let currentDate = getDate();

    const account = bankAccountMaker()
    account.deposit(100);
    account.deposit(200);
    const logger = new BankLogger(account);
    expect(logger.transactions).toContain('date || credit || debit || balance');
    expect(logger.transactions).toContain(`${currentDate} || 100.00 || || 100.00`);
    expect(logger.transactions).toContain(`${currentDate} || 200.00 || || 300.00`);
  });
  it('should return a list of deposits and withdrawals in expected format', () => {
    let currentDate = getDate();

    const account = bankAccountMaker()
    account.deposit(100);
    account.withdraw(50);
    account.deposit(200);
    const logger = new BankLogger(account);
    expect(logger.transactions).toContain('date || credit || debit || balance');
    expect(logger.transactions).toContain(`${currentDate} || 100.00 || || 100.00`);
    expect(logger.transactions).toContain(`${currentDate} || || 50.00 || 50.00`);
    expect(logger.transactions).toContain(`${currentDate} || 200.00 || || 250.00`);
  });
})

interface BankAccount {
  balance: number;
  history: number[];
  deposit(amount: number): void;
  withdraw(amount: number): void;
  get balanceHistory(): number[];
}