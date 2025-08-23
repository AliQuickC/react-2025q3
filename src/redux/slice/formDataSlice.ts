import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type FormTypes = string | number | boolean | 'male' | 'female' | null;

interface FormObject {
  name: string;
  age: string;
  email: string;
  password1: string;
  password2: string;
  sex: 'male' | 'female' | null;
  acceptTandC: boolean;
  image: string;
  country: string;
}

export type FormKeys =
  | 'name'
  | 'age'
  | 'email'
  | 'password1'
  | 'password2'
  | 'sex'
  | 'acceptTandC'
  | 'image'
  | 'country';

type FormData = Pick<FormObject, FormKeys>;

export const initialState: FormData = {
  name: '',
  age: '',
  email: '',
  password1: '',
  password2: '',
  sex: null,
  acceptTandC: false,
  image: '',
  country: '',
};

export const formDataSlice = createSlice({
  name: 'formDataState',
  initialState,
  reducers: {
    changeFormData: (
      state: FormData,
      action: PayloadAction<{
        keyName: keyof FormData;
        value: FormTypes;
      }>
    ) => {
      const { keyName, value } = action.payload;

      if (keyName in state) {
        state[keyName as FormKeys] = value as never;
      }
    },
  },
});

export const actions = formDataSlice.actions;

export default formDataSlice.reducer;
