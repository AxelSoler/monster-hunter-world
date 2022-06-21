import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Monster from '../components/Monster/Monster';

test('monster snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Monster key="345" id={345} name="Axel" />
        ,
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
