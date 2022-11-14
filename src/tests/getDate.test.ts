import getDate from '../getDate';

describe('#getDate', () => {
  it('should return the current date as a string', () => {
    const date = getDate();
    expect(typeof date).toBe('string');
  });
  it('should not return the time', () => {
    const date = getDate();
    expect(date).not.toContain(new Date().toTimeString());
  })
  it('should return the date in DD/MM/YY format', () => {
    const date = getDate();
    expect(date).toMatch(/\d{2}\/\d{2}\/\d{2}/);
  })
});