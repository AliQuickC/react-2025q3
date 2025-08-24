import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const countryList = ['Russia', 'USA', 'UK', 'Argentina', 'Poland', 'China'];
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

export type FormControl = {
  formData: FormData;
  countryList: string[];
};

export const initialState: FormControl = {
  formData: {
    name: '',
    age: '',
    email: '',
    password1: '',
    password2: '',
    sex: null,
    acceptTandC: false,
    image: '',
    country: '',
  },
  countryList: countryList,
};

export const formDataSlice = createSlice({
  name: 'formDataState',
  initialState,
  reducers: {
    changeFormData: (
      state: FormControl,
      action: PayloadAction<{
        keyName: keyof FormData;
        value: FormTypes;
      }>
    ) => {
      const { keyName, value } = action.payload;
      const { formData } = state;

      if (keyName in formData) {
        formData[keyName as FormKeys] = value as never;
      }
    },
  },
});

export const actions = formDataSlice.actions;

export default formDataSlice.reducer;
