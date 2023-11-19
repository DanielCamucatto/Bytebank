import { render, screen } from '@testing-library/react';
import Formulario from './index';
import { type } from '@testing-library/user-event/dist/type';
import userEvent from '@testing-library/user-event';

describe('should render an input component', () => {
  // it('should render an select component in document', () => {
  //   render(<Formulario />);
  //   const selectElement = screen.getByRole(' Selecione um tipo de transação');
  //   expect(selectElement).toBeInTheDocument();
  // });

  it('should render an input component in document', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    expect(inputText).toBeInTheDocument();
  });

  it('should render an input compoenent in document with type number', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    expect(inputText).toHaveAttribute('type', 'number');
  });

  it('should render an input compoenent in document with type number', () => {
    render(<Formulario />);
    const inputText = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(inputText, '50');
    expect(inputText).toHaveValue(50);
  });

  it('deve chamar um evento de onSubmit ao clicar em realizar transacao', () => {
    const realizarTransacao = jest.fn();
    render(<Formulario realizarTransacao={realizarTransacao} />);
    const btn = screen.getByRole('button');
    userEvent.click(btn);
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
  });
});
