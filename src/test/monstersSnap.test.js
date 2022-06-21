import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Monsters from '../components/Monsters/Monsters';

test('monsters snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Monsters />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
