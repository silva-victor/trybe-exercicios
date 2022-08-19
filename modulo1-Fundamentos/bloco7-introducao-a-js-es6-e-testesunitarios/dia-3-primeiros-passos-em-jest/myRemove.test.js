const myRemove = require('./myRemove');

it('Verifica se a chamada myRemove([1, 2, 3, 4, 5], 3) retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).not.toContain([1, 2, 3, 4]);
})