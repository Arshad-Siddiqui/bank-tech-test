import BankLogger from '../bankLogger'
import BankAccount from '../bankAccount'

describe('BankLogger', () => {
  it('should return the header string', () => {
    const account = new BankAccount();
    const logger = new BankLogger(account);
    expect(logger.transactions).toBe('date || credit || debit || balance')
  })
  it('should return a list of deposits in expected format', () => {
    let currentDate = new Date().toISOString().split('T')[0];

    const account = new BankAccount();
    account.deposit(100);
    account.deposit(200);
    const logger = new BankLogger(account);
    expect(logger.transactions).toContain('date || credit || debit || balance');
    expect(logger.transactions).toContain(`${currentDate} || 100.00 || || 100.00`);
    expect(logger.transactions).toContain(`${currentDate} || 200.00 || || 300.00`);
  });
})