import type { JSX } from 'react';
import classNames from 'classnames';
import s from './Modal.module.sass';

type Props = {
  closeHandler: () => void;
  children: JSX.Element;
};

export function Modal(props: Props): JSX.Element {
  const modalStyles = classNames(s.modal + ' modal');

  const modalClickHandler = () => {
    props.closeHandler();
  };

  const modalWindowClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={modalStyles} onClick={modalClickHandler}>
      <div className={s.modalWindow} onClick={modalWindowClickHandler}>
        {props.children}
      </div>
    </div>
  );
}
