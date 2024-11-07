
describe('Contador', () => {
    it('debería incrementar el contador', () => {
      let contador = 0;
      contador += 1;
      expect(contador).toBe(1);
    });
  });
  