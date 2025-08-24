import { object, string, number, boolean } from 'yup';

const regExpName = new RegExp(/^[А-ЯA-Z][а-яёa-z]*$/);
const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPassword = new RegExp(
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).+$/
);
const regExpCountry = new RegExp(/^(?!DEFAULT$).+$/);

export const schema = object({
  name: string()
    .required('Not be required')
    .min(2, 'Min length is 2')
    .matches(regExpName, 'First character must be capitalized'),
  age: number()
    .required('Not be required')
    .positive('must be a positive number')
    .integer('must be a number'),
  email: string()
    .required()
    .email()
    .matches(regExpEmail, 'does not match the pattern'),
  password1: string()
    .required('Not be required')
    .min(6, 'Min length is 6')
    .matches(regExpPassword, 'does not match the pattern'),
  password2: string()
    .required('Not be required')
    .min(6, 'Min length is 6')
    .matches(regExpPassword, 'does not match the pattern'),
  sex: boolean().required('Select sex'),
  country: string()
    .required('Not be required')
    .matches(regExpCountry, 'Select value'),
});
