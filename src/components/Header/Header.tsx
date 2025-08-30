import s from './Header.module.sass';
import { useState, type JSX } from 'react';
import reactLogo from './../../assets/react.svg';
import { Search } from '../Search/Search';
import type { State } from '../../types/types';
import { SortSelect } from '../SortSelect/SortSelect';
import classNames from 'classnames';
import { SelectColumnsWindow } from '../SelectColumnsWindow/SelectColumnsWindow';

type Props = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export function Header(props: Props): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const headerStyles = classNames('section ', s.header);
  const headerContainerStyles = classNames('container ', s.headerContainer);

  return (
    <header className={headerStyles}>
      <div className={headerContainerStyles}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Search setState={props.setState} />
        <SortSelect sort={props.state.countrySort} setState={props.setState} />
        <button
          className={s.selectColumnsBtn}
          onClick={() => {
            setShowModal(true);
          }}
        >
          Select columns
        </button>
      </div>
      {showModal ? (
        <SelectColumnsWindow
          state={props.state.additionalColumns}
          setShowModal={setShowModal}
          setState={props.setState}
        />
      ) : (
        ''
      )}
    </header>
  );
}
