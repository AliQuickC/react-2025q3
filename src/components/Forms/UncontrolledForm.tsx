import s from './Forms.module.sass';
import type { ChangeEvent, FormEvent, JSX } from 'react';
import { useFormControl } from '../../redux/useAppSelector';
import { useActions } from '../../redux/useActions';
import type { FormKeys, FormTypes } from '../../redux/slice/formDataSlice';

type Props = {
  closeHandler: () => void;
};

export function UncontrolledForm(props: Props): JSX.Element {
  const { formData, countryList } = useFormControl();
  const { name, age, email, password1, password2, sex, country, acceptTandC } =
    formData;

  const { changeFormData } = useActions();

  const countrySelect = countryList.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

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

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    console.log('event: ', event);
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement)
    );
    console.log('data: ', data);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Uncontrolled Form</legend>
        <div className={s.inputDataArea}>
          <div className={s.inputItem}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              pattern="^[А-ЯA-Z][а-яёa-z]*$"
              value={name}
              onChange={onChangeHandler}
            />
          </div>
          <div className={s.inputItem}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              min="0"
              name="age"
              id="age"
              placeholder="Age"
              required
              value={age}
              onChange={onChangeHandler}
            />
          </div>
          <div className={s.inputItem}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              pattern="^\S+@\S+\.\S+$"
              value={email}
              onChange={onChangeHandler}
            />
          </div>

          <div className={s.inputItem}>
            <label htmlFor="password1">password</label>
            <input
              type="password"
              name="password1"
              id="password1"
              minLength={6}
              required
              placeholder="password"
              value={password1}
              onChange={onChangeHandler}
            />
          </div>
          <div className={s.inputItem}>
            <label htmlFor="password2">password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              minLength={6}
              required
              placeholder="duplicate password"
              value={password2}
              onChange={onChangeHandler}
            />
          </div>

          <fieldset className={s.inputItem}>
            <legend>sex</legend>
            <label htmlFor="male">male</label>
            <input
              type="radio"
              name="sex"
              id="male"
              value="male"
              required
              checked={sex === 'male'}
              onChange={onChangeHandler}
            />
            <label htmlFor="female">femaile</label>
            <input
              type="radio"
              name="sex"
              id="female"
              value="female"
              required
              checked={sex === 'female'}
              onChange={onChangeHandler}
            />
          </fieldset>

          <div className={s.inputItem}>
            <input
              type="checkbox"
              name="acceptTandC"
              id="t-and-c"
              checked={acceptTandC}
              onChange={onChangeHandler}
            />
            <label htmlFor="t-and-c">accept Terms and Conditions</label>
          </div>

          <div className={s.inputItem}>
            <label htmlFor="image">image</label>
            <input type="image" name="image" id="image" />
          </div>

          <div className={s.inputItem}>
            <label htmlFor="country">country</label>
            <select
              id="country"
              value={country || ''}
              required
              name="country"
              onChange={onChangeHandler}
            >
              <option value="" disabled>
                Select country
              </option>
              {countrySelect}
            </select>
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
