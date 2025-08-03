import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SelectedItems } from './SelectedItems';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';

test('Render selected items info panel', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SelectedItems selectedElements={5} />
      </Provider>
    </BrowserRouter>
  );

  const selectedItemsComponent = screen.queryByText(/Selected elements:/i);
  const countOutputElement = screen.queryByTestId('select-item-count');

  expect(selectedItemsComponent).toBeInTheDocument();
  expect(countOutputElement).toBeInTheDocument();
  expect(countOutputElement?.textContent).toBe('5');
});
