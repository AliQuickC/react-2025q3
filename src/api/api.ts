import type {
  GamesData,
  IGame,
  ResponseGames,
  SetGameList,
} from '../Types/types';

const API_KEY = '85dcaeb171a84c298fef338bfc441a17';

const base_url = 'https://api.rawg.io/api';
const PAGE_SIZE = '20';
const base_games_url =
  base_url + '/games' + '?key=' + API_KEY + '&page_size=' + PAGE_SIZE;
const errorGamesData = {
  count: 0,
  results: [],
};

function convertResponse(response: ResponseGames): GamesData {
  const results: IGame[] = response.results.map((item) => ({
    id: item.id,
    name: item.name,
    released: item.released || '',
    ratings_count: item.ratings_count,
  }));
  return { count: response.count, results };
}

function responseHandler(param: Promise<Response>, callback: SetGameList) {
  param
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        const status = Math.floor(response.status / 100);
        if (status === 4 || status === 5) throw new Error('Request Errror');
      }
    })
    .then((data: ResponseGames) => convertResponse(data))
    .then((data: GamesData) => callback(data, true))
    .catch(() => {
      callback(errorGamesData, false);
      console.error('error, failed to get data from server');
    });
}

const gamesAPI = {
  getGames(page: string | null = null) {
    const url = base_games_url + `${page ? '&page=' + page : ''}`;
    return fetch(url);
  },
  getSearchGames(find_word: string = '', page: string | null = null) {
    const url =
      base_games_url +
      `${page ? '&page=' + page : ''}` +
      '&search=' +
      find_word;
    return fetch(url);
  },
};

export const requestGames = async (
  callback: SetGameList,
  page: string | null = null
) => {
  responseHandler(gamesAPI.getGames(page), callback);
};

export const requestFindGames = (
  callback: SetGameList,
  word: string,
  page: string | null = null
) => {
  responseHandler(gamesAPI.getSearchGames(word, page), callback);
};
