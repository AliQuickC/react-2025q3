import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFormControl = () => {
  const { formData, countryList } = useAppSelector((state) => state.formData);

  return {
    formData,
    countryList,
  };
};
