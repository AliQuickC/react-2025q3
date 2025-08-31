import { createContext } from 'react';
import type { SortType, State, СolumnsConfig } from '../types/types';

export const COUNTRY_COLUMN_HEADER = 'country';
export const ISO_CODE_COLUMN_HEADER = 'iso_code';

export const columnsConfig: СolumnsConfig = {
  country: { header: 'country', cellWidth: '100px' },
  iso_code: { header: 'iso code', cellWidth: '50px' },
  year: { header: 'year', cellWidth: '50px' },
  population: { header: 'population', cellWidth: '120px' },
  co2: { header: 'co2', cellWidth: '180px' },
  co2_per_capita: { header: 'co2 per capita', cellWidth: '180px' },

  cement_co2_per_capita: {
    header: 'cement co2 per capita',
    cellWidth: '180px',
  },
  cumulative_cement_co2: {
    header: 'cumulative_cement_co2',
    cellWidth: '180px',
  },
  total_ghg: { header: 'total ghg', cellWidth: '180px' },
  coal_co2_per_capita: { header: 'coal co2 per capita', cellWidth: '180px' },
  share_global_co2: { header: 'share global co2', cellWidth: '180px' },
  // consumption_co2: { header: 'consumption co2', cellWidth: '100px' },
};

export const baseColumnList: (keyof СolumnsConfig)[] = [
  COUNTRY_COLUMN_HEADER,
  ISO_CODE_COLUMN_HEADER,
  'year',
  'population',
  'co2',
  'co2_per_capita',
];

export const initialState = {
  searchTerm: '',
  countrySort: 'asc' as SortType,
  additionalColumns: [],
};

export const GlobalStateContext = createContext<State>(initialState);
