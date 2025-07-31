import { FIRST_PAGE } from '../../const/const';
import { useCardList } from '../../redux/useAppSelector';
import type { SetGameList } from '../../Types/types';
import CardDetails from '../CardDetails/CardDetails';
import ItemsList from '../ItemsList/ItemsList';
import Pagination from '../Pagination/Pagination';
import s from './Results.module.sass';
import { type JSX } from 'react';

interface IProps {
  setGameList: SetGameList;
  lsWord: string;
}

function Results(props: IProps): JSX.Element {
  const { cardListData, item } = useCardList();

  return (
    <main className={s.main} data-testid="results-element">
      <div className={'container ' + s.ResultConteqner}>
        <div>
          <ItemsList
            cardListData={cardListData}
            setGameList={props.setGameList}
            lsWord={props.lsWord}
          />
          {cardListData.haveData ? (
            <Pagination
              cardsTotal={cardListData.count}
              currentPage={cardListData.currentPage || FIRST_PAGE}
            />
          ) : (
            ''
          )}
        </div>
        {item === null ? '' : <CardDetails item={item} />}
      </div>
    </main>
  );
}

export default Results;
