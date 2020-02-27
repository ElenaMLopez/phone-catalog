import React from 'react';
import { render } from '@testing-library/react';
import { Home }  from '../components/Home';

test('Render application', () => {
  const { renderHome } = render(<Home />)
  expect( renderHome )
})
