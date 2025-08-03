import { MAX_CARDS_ON_PAGE } from '../const/const';
import type {
  GameDetail,
  GamesData,
  IGame,
  ResponseGameDetail,
  ResponseGames,
  SetGameList,
} from '../Types/types';

const apiKey: string = import.meta.env.VITE_API_KEY;

const base_url = 'https://api.rawg.io/api';

const base_games_url =
  base_url +
  '/games' +
  '?key=' +
  apiKey +
  '&page_size=' +
  MAX_CARDS_ON_PAGE.toString();

const base_game_detail_url = base_url + '/games/';

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

function convertGameDetailResponse(response: ResponseGameDetail): GameDetail {
  return {
    id: response.id,
    isLoading: true,
    detailData: {
      name: response.name,
      background_image: response.background_image,
      genres: response.genres.map((genre) => genre.name).join(', '),
    },
  };
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
    .then((data: GamesData) =>
      callback({
        gamesData: data,
        responseOk: true,
      })
    )
    .catch(() => {
      callback({
        gamesData: errorGamesData,
        responseOk: false,
      });
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
  getGamDetail(id: string) {
    const url = base_game_detail_url + id + '?key=' + apiKey;
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

export const requestDetail = (
  id: string,
  callback: (gameDetail: GameDetail) => void
): void => {
  gamesAPI
    .getGamDetail(id)
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        const status = Math.floor(response.status / 100);
        if (status === 4 || status === 5) throw new Error('Request Errror');
      }
    })
    .then((data: ResponseGameDetail) => convertGameDetailResponse(data))
    .then((data: GameDetail) => {
      callback({
        detailData: data.detailData,
        id: data.id,
        isLoading: data.isLoading,
      });
    });
};
