import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Edmark Magsalin.', () => {
  render(<App />);
  const linkElement = screen.getByText(/Edmark Magsalin./i);
  expect(linkElement).toBeInTheDocument();
});
