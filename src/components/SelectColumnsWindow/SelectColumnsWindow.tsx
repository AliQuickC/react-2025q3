import { useState, type ChangeEvent } from 'react';
import s from './SelectColumnsWindow.module.sass';
import type { State } from '../../types/types';

type Props = {
  state: string[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export function SelectColumnsWindow(props: Props) {
  const [columns, setColumns] = useState<string[]>(props.state);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const keyName = event.target.name;
    setColumns((prev) => {
      if (value) {
        return [...prev, keyName];
      } else {
        return prev.filter((item) => item !== keyName);
      }
    });
  };

  return (
    <div className={s.window}>
      <fieldset className={s.fieldset}>
        <legend className={s.fieldsetTitle}>Select columns: </legend>
        <label htmlFor="field1">
          <input
            type="checkbox"
            id="field1"
            name="cement_co2_per_capita"
            onChange={onChangeHandler}
            checked={columns.includes('cement_co2_per_capita')}
          />
          cement_co2_per_capita
        </label>

        <label htmlFor="field2">
          <input
            type="checkbox"
            id="field2"
            name="cumulative_cement_co2"
            onChange={onChangeHandler}
            checked={columns.includes('cumulative_cement_co2')}
          />
          cumulative_cement_co2
        </label>

        <label htmlFor="field3">
          <input
            type="checkbox"
            id="field3"
            name="total_ghg"
            onChange={onChangeHandler}
            checked={columns.includes('total_ghg')}
          />
          total_ghg
        </label>

        <label htmlFor="field4">
          <input
            type="checkbox"
            id="field4"
            name="coal_co2_per_capita"
            onChange={onChangeHandler}
            checked={columns.includes('coal_co2_per_capita')}
          />
          coal_co2_per_capita
        </label>

        <label htmlFor="field5">
          <input
            type="checkbox"
            id="field5"
            name="share_global_co2"
            onChange={onChangeHandler}
            checked={columns.includes('share_global_co2')}
          />
          share_global_co2
        </label>
      </fieldset>

      <div className={s.buttonsWrap}>
        <button
          className={s.applyButton}
          onClick={() => {
            props.setState((prev) => ({ ...prev, additionalColumns: columns }));
            props.setShowModal(false);
          }}
        >
          Apply
        </button>
        <button
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
