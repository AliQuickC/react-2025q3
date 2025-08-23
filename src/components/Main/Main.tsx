import s from './Main.module.sass';
import { createPortal } from 'react-dom';
import { Modal } from '../Modal/Modal';
import { useState, type JSX } from 'react';
import { UncontrolledForm } from '../Forms/UncontrolledForm';
import { ReactHookForm } from '../Forms/ReactHookForm';

type FormTypes = 'UncontrolledForm' | 'ReactHookForm';

export function Main(): JSX.Element {
  const [isOpenModal, setIsOpenModal] = useState<{
    isOpen: boolean;
    formType: FormTypes;
  }>({
    isOpen: false,
    formType: 'UncontrolledForm',
  });

  const openModalHandler = (formTypes: FormTypes) => {
    setIsOpenModal({
      isOpen: true,
      formType: formTypes,
    });
  };

  const closeModalHandler = () => {
    setIsOpenModal({ ...isOpenModal, isOpen: false });
  };

  return (
    <main className={'section main'}>
      <div className={'container'}>
        <fieldset className={s.selectForm}>
          {' '}
          <legend>Select a form to fill out:</legend>
          <button
            onClick={() => {
              openModalHandler('UncontrolledForm');
            }}
          >
            Uncontrolled components Form
          </button>
          <button
            onClick={() => {
              openModalHandler('ReactHookForm');
            }}
          >
            React Hook Form
          </button>
          {isOpenModal.isOpen
            ? isOpenModal.formType === 'UncontrolledForm'
              ? createPortal(
                  <Modal closeHandler={closeModalHandler}>
                    <UncontrolledForm closeHandler={closeModalHandler} />
                  </Modal>,
                  document.body
                )
              : createPortal(
                  <Modal closeHandler={closeModalHandler}>
                    <ReactHookForm closeHandler={closeModalHandler} />
                  </Modal>,
                  document.body
                )
            : ''}
        </fieldset>
      </div>
    </main>
  );
}
