export interface IGame {
  id: number;
  name: string;
  released: string;
  ratings_count: number;
}

export interface IGlobalState {
  haveData: boolean;
  games: IGame[];
  count: number;
  responseOk: boolean;
}

export type SetGameList = (gamesData: GamesData, responseOk: boolean) => void;
export type setFindWord = (findWord: string) => void;
export type onSearch = () => void;

export type ResponseGames = {
  count: number;
  results: IGame[];
  next: string;
  description: string;
  [propName: string]: unknown;
};

export type GamesData = {
  count: number;
  results: IGame[];
};
