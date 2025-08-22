import classNames from 'classnames';
import s from './Main.module.sass';

export function Main() {
  const containerClass = classNames('container', 'unselectable');

  return (
    <main className={'section main'}>
      <div className={containerClass}>
        <fieldset className={s.buttons}>
          {' '}
          <legend>Forms:</legend>
          <button>Uncontrolled components Form</button>
          <button>React Hook Form</button>
        </fieldset>
      </div>
    </main>
  );
}
