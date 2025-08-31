import s from './Search.module.sass';
import type { State } from '../../types/types';
import { useState, type JSX } from 'react';

type Props = {
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export function Search(props: Props): JSX.Element {
  const [findTerm, setFindTerm] = useState<string>('');

  return (
    <div className={s.search} data-testid="search-element">
      <input
        className={s.searchInput}
        name="find"
        type="text"
        placeholder="find..."
        value={findTerm}
        onChange={(event) => {
          setFindTerm(event.target.value);
        }}
      />
      <button
        className={s.findButton}
        onClick={() => {
          props.setState((prev) => ({
            ...prev,
            searchTerm: findTerm,
          }));
        }}
        aria-label="find"
      ></button>
    </div>
  );
}
