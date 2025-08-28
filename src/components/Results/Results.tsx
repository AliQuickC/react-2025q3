import type { Data } from '../../types/types';
import { use, type JSX } from 'react';
import { fetchData } from '../../api/api';
import { Table } from '../Table/Table';

const urlData = '../data/owid-co2-data.json';

export function Results(): JSX.Element {
  const co2data: Data = use(fetchData(urlData));
  console.log('co2data: ', co2data);

  return (
    <div>
      <Table co2data={co2data} />
    </div>
  );
}
