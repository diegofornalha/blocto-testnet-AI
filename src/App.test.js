import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main title", () => {
  render(<App />);
  const mainTitle = screen.getByText(/Deploy de Contrato e Transações Flow/i);
  expect(mainTitle).toBeInTheDocument(); // Verifica se o título principal está sendo renderizado
});

test("renders authentication section", () => {
  render(<App />);
  const authSection = screen.getByText(/Autenticação/i);
  expect(authSection).toBeInTheDocument(); // Verifica se o subtítulo "Autenticação" está presente
});

test("renders send transaction section", () => {
  render(<App />);
  const sendTransactionSection = screen.getByText(/Enviar Transação/i);
  expect(sendTransactionSection).toBeInTheDocument(); // Verifica se o subtítulo "Enviar Transação" está presente
});
