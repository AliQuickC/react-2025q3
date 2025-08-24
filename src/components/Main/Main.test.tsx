import { render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { Main } from './Main';
import userEvent from '@testing-library/user-event';

test('Show modal Uncontrolled components Form', async () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const user = userEvent.setup();
  const openFormButtom: HTMLButtonElement = screen.getByRole('button', {
    name: 'With Uncontrolled components',
  }) as HTMLButtonElement;

  await user.click(openFormButtom);

  waitFor(async () => {
    expect(screen.getByText(/Uncontrolled Form/i)).toBeInTheDocument();
  });
});

test('Show modal React Hook Form', async () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const user = userEvent.setup();
  const openFormButtom: HTMLButtonElement = screen.getByRole('button', {
    name: 'With React Hook',
  }) as HTMLButtonElement;

  await user.click(openFormButtom);

  waitFor(async () => {
    expect(screen.getByText(/React Hook Form/i)).toBeInTheDocument();
  });
});
