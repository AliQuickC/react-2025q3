import { useCallback, useState, type ChangeEvent } from 'react';
import s from './YearSelect.module.sass';
import {
  defaultYearValue,
  maxYearValue,
  minYearValue,
} from '../../constant/constants';
import type { State } from '../../types/types';

type Props = {
  year: number;
  setState: React.Dispatch<React.SetStateAction<State>>;
};
export function YearSelect(props: Props) {
  const [year, setYear] = useState<number>(props.year);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(+event.target.value);
  };

  const setYearValue = useCallback(() => {
    if (year >= minYearValue && year <= maxYearValue) {
      props.setState((prev) => ({
        ...prev,
        year: year,
      }));
    } else {
      setYear(defaultYearValue);
      props.setState((prev) => ({
        ...prev,
        year: defaultYearValue,
      }));
    }
  }, [props, year]);

  return (
    <div>
      <label className={s.yearFilterLabel} htmlFor="field1">
        Year(1750-2023):
      </label>
      <input
        className={s.yearFilterInput}
        type="number"
        id="year"
        name="year"
        value={year}
        onChange={onChangeHandler}
      />

      <button className={s.yearFilterButton} onClick={setYearValue}>
        Year
      </button>
    </div>
  );
}
