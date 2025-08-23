import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFormData = () => {
  const {
    name,
    age,
    email,
    password1,
    password2,
    sex,
    acceptTandC,
    image,
    country,
  } = useAppSelector((state) => state.formData);

  return {
    name,
    age,
    email,
    password1,
    password2,
    sex,
    acceptTandC,
    image,
    country,
  };
};
