'use client';

import { Provider } from 'react-redux';
import store from '../redux/store';
import { JSX } from 'react';

type Props = {
  children: JSX.Element;
};

export function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
