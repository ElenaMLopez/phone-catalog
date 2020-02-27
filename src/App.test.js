import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Reder application', () => {
  const {renderApp} = render(<App />)
  expect(renderApp)
})
