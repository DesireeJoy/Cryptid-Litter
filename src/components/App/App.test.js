import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const CryptidTitle = screen.getByText(/Cryptid Litter/i);
  expect(CryptidTitle).toBeInTheDocument();
});
