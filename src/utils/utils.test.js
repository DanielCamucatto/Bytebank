import { calculaNovoSaldo } from './index';

describe('quando eu realizo uma transação', () => {
  it('que é um deposito deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(150);
  });
  it('que é um tranferencia o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferencia',
      valor: 50,
    };

    const novaTrasnferencia = calculaNovoSaldo(transacao, 100);
    expect(novaTrasnferencia).toBe(50);
  });
});
