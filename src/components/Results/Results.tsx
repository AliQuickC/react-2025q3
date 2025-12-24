import { FIRST_PAGE } from '../../const/const';
import type { IGlobalState, SetGameList } from '../../Types/types';
import CardDetails from '../CardDetails/CardDetails';
import ItemsList from '../ItemsList/ItemsList';
import Pagination from '../Pagination/Pagination';
import s from './Results.module.sass';
import { type JSX } from 'react';

interface IProps {
  globalState: IGlobalState;
  setGameList: SetGameList;
  lsWord: string;
}

function Results(props: IProps): JSX.Element {
  return (
    <main className={s.main} data-testid="results-element">
      <div className={'container ' + s.ResultConteqner}>
        <div>
          <ItemsList
            globalState={props.globalState}
            setGameList={props.setGameList}
            lsWord={props.lsWord}
          />
          {props.globalState.haveData ? (
            <Pagination
              cardsTotal={props.globalState.count}
              currentPage={props.globalState.currentPage || FIRST_PAGE}
              haveData={props.globalState.haveData}
            />
          ) : (
            ''
          )}
        </div>
        {props.globalState.item === null ? (
          ''
        ) : (
          <CardDetails item={props.globalState.item} />
        )}
      </div>
    </main>
  );
}

export default Results;
