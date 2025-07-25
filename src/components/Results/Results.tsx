import type { IGlobalState, SetGameList } from '../../Types/types';
import ItemsList from '../ItemsList/ItemsList';
import s from './Results.module.sass';
import { type JSX } from 'react';

interface IProps {
  globalState: IGlobalState;
  setGameList: SetGameList;
}

function Results(props: IProps): JSX.Element {
  return (
    <main className={s.main} data-testid="results-element">
      <div className="container">
        <ItemsList
          globalState={props.globalState}
          setGameList={props.setGameList}
        />
      </div>
    </main>
  );
}

export default Results;
