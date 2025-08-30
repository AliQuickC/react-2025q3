import s from './Header.module.sass';
import type { JSX } from 'react';
import reactLogo from './../../assets/react.svg';
import { Search } from '../Search/Search';
import type { State } from '../../types/types';
import { SortSelect } from '../SortSelect/SortSelect';
import classNames from 'classnames';

type Props = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export function Header(props: Props): JSX.Element {
  const headerContainerStyles = classNames('container', s.headerContainer);

  return (
    <header className={'section header'}>
      <div className={headerContainerStyles}>
        <img src={reactLogo} className="logo react" alt="React logo" />

        <Search state={props.state} setState={props.setState} />
        <SortSelect sort={props.state.countrySort} setState={props.setState} />

        <button className={s.selectColumnsBtn}>Select columns</button>
      </div>
    </header>
  );
}
