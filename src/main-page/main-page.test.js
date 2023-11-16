import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/myweather/i);
  expect(titleElement).toBeInTheDocument();
});
