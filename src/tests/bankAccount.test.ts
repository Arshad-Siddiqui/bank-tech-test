import BankAccount from '../bankAccount';

describe('BankAccount', () => {
  it('should take a deposit and return the balance', () => {
    const account = new BankAccount();
    account.deposit(100);
    expect(account.balance).toBe(100);
  });
  it('should take multiple deposits and return the balance', () => {
    const account = new BankAccount();
    account.deposit(100);
    account.deposit(200);
    expect(account.balance).toBe(300);
  });
  it('should take a withdrawal and return the balance', () => {
    const account = new BankAccount();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toBe(50);
  });
});