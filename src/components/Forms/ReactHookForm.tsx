import s from './Forms.module.sass';
import type { ChangeEvent, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../../redux/useActions';
import type {
  FormInputData,
  FormKeys,
  FormTypes,
} from '../../redux/slice/formDataSlice';
import { useFormControl } from '../../redux/useAppSelector';
import { schema } from './schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  closeHandler: () => void;
};

export function ReactHookForm(props: Props): JSX.Element {
  const { formData, countryList } = useFormControl();
  const { name, age, email, password1, password2, sex, country, acceptTandC } =
    formData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputData>({ resolver: yupResolver(schema) });

  const { changeFormData } = useActions();

  const countrySelect = countryList.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const onSubmit = (data: object) => {
    console.log('data: ', data);
  };

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value;
    if (event.target.type === 'radio') {
      value = event.target.id as FormTypes;
    } else if (event.target.type === 'checkbox') {
      value = event.target.checked as FormTypes;
    } else {
      value = event.target.value as FormTypes;
    }
    const keyName = event.target.name as FormKeys;
    changeFormData({ keyName, value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>React Hook Form</legend>
        <div className={s.inputDataArea}>
          <div className={s.inputItem}>
            <label htmlFor="name">Name</label>
            <div className={s.inputWrapper}>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                {...register('name', {
                  onChange: onChangeHandler,
                })}
              />
              {errors?.name && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.name.message}
                </div>
              )}
            </div>
          </div>

          <div className={s.inputItem}>
            <label htmlFor="age">Age</label>
            <div className={s.inputWrapper}>
              <input
                type="number"
                min="0"
                id="age"
                value={age}
                {...register('age', {
                  onChange: onChangeHandler,
                })}
              />
              {errors?.age && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.age.message}
                </div>
              )}
            </div>
          </div>

          <div className={s.inputItem}>
            <label htmlFor="email">Email</label>
            <div className={s.inputWrapper}>
              <input
                type="email"
                id="email"
                value={email}
                {...register('email', {
                  onChange: onChangeHandler,
                })}
              />
              {errors?.email && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>

          <div className={s.inputItem}>
            <label htmlFor="password1">password</label>
            <div className={s.inputWrapper}>
              <input
                type="password"
                id="password1"
                value={password1}
                {...register('password1', {
                  onChange: onChangeHandler,
                })}
              />
              {errors?.password1 && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.password1.message}
                </div>
              )}
            </div>
          </div>
          <div className={s.inputItem}>
            <label htmlFor="password2">password</label>
            <div className={s.inputWrapper}>
              <input
                type="password"
                id="password2"
                value={password2}
                {...register('password2', {
                  onChange: onChangeHandler,
                })}
              />
              {errors?.password2 && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.password2.message}
                </div>
              )}
            </div>
          </div>

          <fieldset className={s.inputItem}>
            <legend>sex</legend>
            <label htmlFor="male">male</label>
            <input
              type="radio"
              id="male"
              checked={sex === 'male'}
              {...register('sex', {
                onChange: onChangeHandler,
                required: 'Not be required',
              })}
            />
            <label htmlFor="female">femaile</label>
            <input
              type="radio"
              id="female"
              checked={sex === 'female'}
              {...register('sex', {
                onChange: onChangeHandler,
                required: 'Not be required',
              })}
            />
            {errors?.sex && (
              <div className={s.errorMessage} style={{ color: 'red' }}>
                {errors.sex.message}
              </div>
            )}
          </fieldset>

          <div className={s.inputItem}>
            <input
              type="checkbox"
              id="t-and-c"
              checked={acceptTandC}
              {...register('acceptTandC', {
                onChange: onChangeHandler,
              })}
            />
            <label htmlFor="t-and-c">accept Terms and Conditions</label>
          </div>

          <div className={s.inputItem}>
            <label htmlFor="image">image</label>
            <input type="image" name="image" id="image" />
          </div>

          <div className={s.inputItem}>
            <label htmlFor="country">country</label>
            <div className={s.inputWrapper}>
              <select
                id="country"
                value={country || 'DEFAULT'}
                {...register('country', {
                  onChange: onChangeHandler,
                })}
              >
                <option value="DEFAULT" disabled>
                  Select country
                </option>
                {countrySelect}
              </select>
              {errors?.country && (
                <div className={s.errorMessage} style={{ color: 'red' }}>
                  {errors.country.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={props.closeHandler}>
          Close
        </button>
      </fieldset>
    </form>
  );
}
