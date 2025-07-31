import s from './Pagination.module.sass';
import type { JSX } from 'react';
import { getPagesCount } from '../../utils/utils';
import { MAX_CARDS_ON_PAGE } from '../../const/const';
import { useSearchParams } from 'react-router-dom';

const MAX_PAGINATION = 150;

interface IProps {
  cardsTotal: number;
  currentPage: string;
}

export default function Pagination(props: IProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const paginationNumberHandler = (
    pageNumber: number,
    currentPage: string = '1'
  ) => {
    if (+currentPage === pageNumber) return;

    const search = searchParams.get('search');

    if (search) {
      setSearchParams({ page: '' + pageNumber, search: search });
    } else {
      setSearchParams({ page: '' + pageNumber });
    }
  };

  const pagesCount = getPagesCount(props.cardsTotal, MAX_CARDS_ON_PAGE);

  const pages: JSX.Element[] = Array(
    pagesCount > MAX_PAGINATION ? MAX_PAGINATION : pagesCount
  )
    .fill(null)
    .map((_, index) => (
      <span
        className={
          (+props.currentPage === index + 1 ? s.selectedPage : '') +
          ' ' +
          s.pageNumber
        }
        key={index + 1}
        onClick={(event) => {
          if (+props.currentPage !== index + 1) {
            event.stopPropagation();
          }
          paginationNumberHandler(index + 1, props.currentPage);
        }}
        data-testid="pagination-element"
      >
        {index + 1}
      </span>
    ));

  return <div className={s.numbersList}>{pages}</div>;
}
