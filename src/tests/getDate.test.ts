import getDate from '../getDate';

describe('#getDate', () => {
  it('should return the current date as a string', () => {
    const date = getDate();
    expect(date).toStrictEqual(new Date().toDateString());
  });
});