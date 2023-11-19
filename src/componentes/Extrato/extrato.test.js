import { render, screen } from '@testing-library/react';
import Extrato from './index';

describe('should render an list extrato', () => {
  it('should render extrato props', () => {
    const transacoes = [
      {
        transacoes: 'Déposito',
        valor: 100,
      },
    ];
    render(<Extrato transacoes={transacoes} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
