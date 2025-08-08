import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCardList = () => {
  const { item, selectItems } = useAppSelector((state) => state.cardList);

  return {
    item,
    selectItems,
  };
};

export const useDetails = () => {
  const { detailData, isLoading, id } = useAppSelector(
    (state) => state.details
  );

  return {
    detailData,
    isLoading,
    id,
  };
};
