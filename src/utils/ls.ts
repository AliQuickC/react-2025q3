import { storeKEY } from '../const/const';

export const getFromLSFindWord = (): string => {
  const LocStor = localStorage.getItem(storeKEY);
  if (!LocStor) {
    localStorage.setItem(storeKEY, '');
  }

  const word = localStorage.getItem(storeKEY) as string;
  return word;
};
