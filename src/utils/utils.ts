import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { responseErrorMessage } from '../const/const';
import type {
  GameDetail,
  GamesData,
  IGame,
  ResponseGameDetail,
  ResponseGames,
} from '../Types/types';
import type { SerializedError } from '@reduxjs/toolkit/react';

export function getPagesCount(
  cardsTotal: number,
  maxCardsOnPage: number
): number {
  return Math.ceil(cardsTotal / maxCardsOnPage);
}

export function convertResponse(response: ResponseGames): GamesData {
  const results: IGame[] = response.results.map((item) => ({
    id: item.id,
    name: item.name,
    released: item.released || '',
    ratings_count: item.ratings_count,
  }));
  return { count: response.count, results };
}

export function convertGameDetailResponse(
  response: ResponseGameDetail
): GameDetail {
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

export const getErrorInfo = (
  error: FetchBaseQueryError | SerializedError | undefined
): string => {
  if (!error) {
    return responseErrorMessage;
  }

  const errCode = 'code' in error ? `Code: ${error.code} ` : '';
  const errStatus = 'status' in error ? `Status: ${error.status} ` : '';
  const errorString = 'error' in error ? `Error: ${error.error} ` : '';
  const errorMessage = 'message' in error ? `Error: ${error.message} ` : '';
  const errorTotal = errCode + errStatus + errorString + errorMessage;

  if (errorTotal.length === 0) {
    return responseErrorMessage;
  }
  return errorTotal;
};
