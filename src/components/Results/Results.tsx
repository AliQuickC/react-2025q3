import type { IGlobalState, SetGameList } from '../../Types/types';
import ItemsList from '../ItemsList/ItemsList';
import Pagination from '../Pagination/Pagination';
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
        {props.globalState.haveData ? (
          <Pagination
            cardsTotal={props.globalState.count}
            currentPage={props.globalState.currentPage}
            haveData={props.globalState.haveData}
          />
        ) : (
          ''
        )}
      </div>
    </main>
  );
}

export default Results;
