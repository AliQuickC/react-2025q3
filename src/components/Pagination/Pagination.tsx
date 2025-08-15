import s from './Pagination.module.sass';
import type { JSX } from 'react';
import { getPagesCount } from '../../utils/utils';
import { MAX_CARDS_ON_PAGE } from '../../const/const';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const MAX_PAGINATION = 150;

interface IProps {
  cardsTotal: number;
  currentPage: string;
}

export default function Pagination(props: IProps): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const paginationNumberHandler = (
    pageNumber: number,
    currentPage: string = '1'
  ) => {
    if (+currentPage === pageNumber) return;

    const params = new URLSearchParams(searchParams.toString());
    const search = params.get('search');

    router.push(
      pathname +
        '?' +
        'page=' +
        pageNumber +
        (search ? '&search=' + search : '')
    );
  };

  const pagesCount = getPagesCount(props.cardsTotal, MAX_CARDS_ON_PAGE);

  const pages: JSX.Element[] = Array(
    pagesCount > MAX_PAGINATION ? MAX_PAGINATION : pagesCount
  )
    .fill(null)
    .map((_, index) => {
      const pageNumber = index + 1;
      return (
        <span
          className={
            (+props.currentPage === pageNumber ? s.selectedPage : '') +
            ' ' +
            s.pageNumber
          }
          key={pageNumber}
          onClick={(event) => {
            if (+props.currentPage !== pageNumber) {
              event.stopPropagation();
            }
            paginationNumberHandler(pageNumber, props.currentPage);
          }}
          data-testid="pagination-element"
        >
          {pageNumber}
        </span>
      );
    });

  return <div className={s.numbersList}>{pages}</div>;
}
