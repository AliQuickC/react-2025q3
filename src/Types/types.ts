export interface IGame {
  name: string;
}

export interface IGlobalState {
  haveData: boolean;
  starships: IGame[];
  responseOk: boolean;
  findWord: string;
}

export type SetCards = (starships: IGame[], responseOk: boolean) => void;
export type setFindWord = (findWord: string) => void;
export type switchHaveData = (haveData: boolean) => void;
