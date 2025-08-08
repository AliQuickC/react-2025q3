import { FIRST_PAGE } from '../../const/const';
import { useCardList } from '../../redux/useAppSelector';
import CardDetails from '../CardDetails/CardDetails';
import ItemsList from '../ItemsList/ItemsList';
import Pagination from '../Pagination/Pagination';
import { SelectedItems } from '../SelectedItems/SelectedItems';
import s from './Results.module.sass';
import { type JSX } from 'react';
import { useGetGemesListQuery } from '../../redux/gameApi';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { useSearchParams } from 'react-router-dom';

function Results(): JSX.Element {
  const { item, selectItems } = useCardList();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const search = searchParams.get('search') || '';

  const { data, status, error } = useGetGemesListQuery({
    searchTerm: search,
    pageNumber: page,
  });

  return (
    <main className={s.main} data-testid="results-element">
      <div className={'container ' + s.resultConteiner}>
        <div>
          <div className={s.rezultWrap}>
            <ItemsList data={data} status={status} error={error} />
            {item === null ? '' : <CardDetails item={item} />}
          </div>
          {status === QueryStatus.fulfilled ? (
            <Pagination
              cardsTotal={data?.count || 0}
              currentPage={page || FIRST_PAGE}
            />
          ) : (
            ''
          )}
        </div>

        {selectItems.length > 0 ? (
          <SelectedItems selectedElements={selectItems.length} />
        ) : (
          ''
        )}
      </div>
    </main>
  );
}

export default Results;
