import s from './Results.module.sass';
import { use, type JSX } from 'react';
import { fetchData } from '../../api/api';

const urlData = '../data/owid-co2-data.json';

type CountryData = {
  year: number;
  population: number;
  [key: string]: number;
};
type Data = {
  [key: string]: { data: CountryData[]; iso_code: string };
};

export function Results(): JSX.Element {
  const data: Data = use(fetchData(urlData));
  console.log('data: ', data);

  const countries = Object.keys(data);

  const countriesLayout = countries.map((item, index) => {
    const dataItem = data[item];
    return (
      <li key={index}>
        country: {item}, ISO code: {dataItem.iso_code}, population:{' '}
        {dataItem.data[dataItem.data.length - 1].population || 'N/A'}
      </li>
    );
  });

  return (
    <div>
      <ul className={s.countriesList}>{countriesLayout}</ul>
    </div>
  );
}
