const sum = require('./sum');

describe ('Testes da funçaõ sum', () => {
  it('verifica se a soma de 10 e 5 é igual 15', () => {
    expect(sum(10, 5)).toBe(15);
  });
  it('verifica se a soma de 0 e 0 é igual 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('verifica se a soma de 4 e string 5 é igual string 5', () => {
    expect(sum(4, '5')).toMatch('5');
  });
})

it('verifica error', () => {
  expect(() => sum()).toThrow(Error);
});







