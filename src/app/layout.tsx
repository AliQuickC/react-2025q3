import { ReactNode } from 'react';
import '../index.sass';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
