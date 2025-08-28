import s from './Table.module.sass';
import { TableHeader } from '../TableRow/TableHeader';
import type { CountryData, Data, СolumnsConfig } from '../../types/types';
import { TableRow } from '../TableRow/TableRow';
import type { JSX } from 'react';
import {
  baseColumnList,
  columnsConfig,
  COUNTRY_COLUMN_HEADER,
  ISO_CODE_COLUMN_HEADER,
} from '../../constant/constants';

type Props = {
  co2data: Data;
};

function getRowCelsValues(
  columns: (keyof СolumnsConfig)[],
  countrie: string,
  co2data: Data
): (number | string | undefined)[] {
  const data: CountryData =
    co2data[countrie].data[co2data[countrie].data.length - 1];

  return columns.map((columnName) => {
    if (columnName === COUNTRY_COLUMN_HEADER) {
      return countrie;
    } else if (columnName === ISO_CODE_COLUMN_HEADER) {
      return co2data[countrie].iso_code;
    } else {
      return data[columnName];
    }
  });
}

function getRowCelsConfig(columns: (keyof СolumnsConfig)[]) {
  return columns.map((columnName) => columnsConfig[columnName].celWidth);
}

export function Table(props: Props): JSX.Element {
  const columns = baseColumnList.map((item) => columnsConfig[item].header);
  const countries = Object.keys(props.co2data);
  const rowCelsConfig: string[] = getRowCelsConfig(baseColumnList);

  const rowsLayout: JSX.Element[] = countries.map((countrie, index) => {
    const rowValues = getRowCelsValues(baseColumnList, countrie, props.co2data);
    return (
      <TableRow
        key={index}
        rowData={rowValues}
        celsConfig={{ width: rowCelsConfig }}
      />
    );
  });

  return (
    <div className={s.table}>
      <TableHeader columns={columns} celsConfig={{ width: rowCelsConfig }} />
      <div className={s.dataWrap}>{rowsLayout}</div>
    </div>
  );
}
