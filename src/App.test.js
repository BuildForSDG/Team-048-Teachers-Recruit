/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome To eRecruit Platform/i);
  expect(linkElement).toBeInTheDocument();
});
