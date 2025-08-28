import type { СolumnsConfig } from '../types/types';

export const COUNTRY_COLUMN_HEADER = 'country';
export const ISO_CODE_COLUMN_HEADER = 'iso_code';

export const columnsConfig: СolumnsConfig = {
  country: { header: 'country', celWidth: '100px' },
  iso_code: { header: 'iso code', celWidth: '50px' },
  year: { header: 'year', celWidth: '50px' },
  population: { header: 'population', celWidth: '120px' },
  co2: { header: 'co2', celWidth: '180px' },
  co2_per_capita: { header: 'co2 per capita', celWidth: '180px' },
};

export const baseColumnList: (keyof СolumnsConfig)[] = [
  COUNTRY_COLUMN_HEADER,
  ISO_CODE_COLUMN_HEADER,
  'year',
  'population',
  'co2',
  'co2_per_capita',
];
