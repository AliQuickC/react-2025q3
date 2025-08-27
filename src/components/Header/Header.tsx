import type { JSX } from 'react';
import reactLogo from './../../assets/react.svg';

export function Header(): JSX.Element {
  return (
    <header className={'section header'}>
      <div className={'container header-container'}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        React Performance
      </div>
    </header>
  );
}
