import s from './SortSelect.module.sass';
import type { SortType, State } from '../../types/types';
import { useCallback, type ChangeEvent, type JSX } from 'react';

type Props = {
  sort: SortType;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export function SortSelect(props: Props): JSX.Element {
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.setState((prev) => ({
        ...prev,
        countrySort: event.target.value as SortType,
      }));
    },
    []
  );

  return (
    <div className={s.sortSelect}>
      <label htmlFor="country-sort">Sort country: </label>
      <select
        className={s.select}
        value={props.sort}
        name="country-sort"
        id="country-sort"
        onChange={onChangeHandler}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
}
