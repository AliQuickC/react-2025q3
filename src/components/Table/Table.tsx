import s from './Table.module.sass';
import { TableHeader } from '../TableRow/TableHeader';
import type { CountryData, Data, СolumnsConfig } from '../../types/types';
import { TableRow } from '../TableRow/TableRow';
import { useContext, type JSX } from 'react';
import {
  baseColumnList,
  columnsConfig,
  COUNTRY_COLUMN_HEADER,
  GlobalStateContext,
  ISO_CODE_COLUMN_HEADER,
} from '../../constant/constants';

type Props = {
  co2data: Data;
};

function getRowcellsValues(
  columns: (keyof СolumnsConfig)[],
  countrie: string,
  year: number,
  co2data: Data
): (number | string | undefined)[] {
  const data: CountryData | undefined = co2data[countrie].data.find(
    (item) => item.year === year
  );

  return columns.map((columnName) => {
    if (columnName === COUNTRY_COLUMN_HEADER) {
      return countrie;
    } else if (columnName === ISO_CODE_COLUMN_HEADER) {
      return co2data[countrie].iso_code;
    } else {
      return data ? data[columnName] : 'N/A';
    }
  });
}

function getcellsConfig(columns: (keyof СolumnsConfig)[]) {
  return columns.map((columnName) => columnsConfig[columnName].cellWidth);
}

function countriesSort(list: string[], sortDirection: boolean): string[] {
  return sortDirection
    ? list.sort((a, b) => b.localeCompare(a))
    : list.sort((a, b) => a.localeCompare(b));
}

function countriesFilter(list: string[], findWord: string): string[] {
  if (findWord === '') {
    return list;
  }
  return list.filter((item) =>
    item.toLowerCase().includes(findWord.toLowerCase())
  );
}

export function Table(props: Props): JSX.Element {
  const state = useContext(GlobalStateContext);
  const columnList = baseColumnList.concat(state.additionalColumns);

  const columns: string[] = columnList.map(
    (item) => columnsConfig[item].header
  );
  const cellsConfig: string[] = getcellsConfig(columnList);

  const countries: string[] = Object.keys(props.co2data);

  const countriesFiltered = countriesFilter(countries, state.searchTerm);

  const countriesSorted = countriesSort(
    countriesFiltered,
    state.countrySort === 'desc'
  );

  const rowsLayout: JSX.Element[] = countriesSorted.map((countrie, index) => {
    const rowValues = getRowcellsValues(
      columnList,
      countrie,
      state.year,
      props.co2data
    );
    return (
      <TableRow
        key={index}
        rowData={rowValues}
        cellsConfig={{ width: cellsConfig }}
      />
    );
  });

  return (
    <div className={s.table}>
      <TableHeader columns={columns} cellsConfig={{ width: cellsConfig }} />
      <div className={s.dataWrap}>{rowsLayout}</div>
    </div>
  );
}
