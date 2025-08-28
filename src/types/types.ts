export type СolumnsConfig = {
  [key: string]: { header: string; celWidth: string };
};

export type CountryData = {
  year: number;
  population: number;
  [key: string]: number | undefined;
};

export type Data = {
  [key: string]: { data: CountryData[]; iso_code?: string };
};
