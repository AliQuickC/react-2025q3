import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCardList = () => {
  const { item, selectItems, isCacheGameList, isCacheGameDetails } =
    useAppSelector((state) => state.cardList);

  return {
    item,
    selectItems,
    isCacheGameList,
    isCacheGameDetails,
  };
};
