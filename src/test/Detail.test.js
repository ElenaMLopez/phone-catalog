import React from 'react';
import { render } from '@testing-library/react';
import { Detail }  from '../components/Detail';

test('Render application', () => {
  const { renderDetail } = render(<Detail />)
  expect( renderDetail )
})
