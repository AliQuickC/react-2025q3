import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCardList = () => {
  const { cardListData, item } = useAppSelector((state) => state.cardList);

  return {
    cardListData,
    item,
  };
};

export const useDetails = () => {
  const { detailData, haveData, id } = useAppSelector((state) => state.details);

  return {
    detailData,
    haveData,
    id,
  };
};
