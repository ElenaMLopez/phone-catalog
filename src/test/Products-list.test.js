import React from 'react';
import { render } from '@testing-library/react';
import { ProductsList }  from '../components/Products-list.js';

test('Render application', () => {
  const { renderProductsList } = render(<ProductsList />)
  expect( renderProductsList )
})
