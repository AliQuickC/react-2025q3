import type { JSX } from 'react';
import type { IGame } from '../../Types/types';
import s from './Item.module.sass';
import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { useActions } from '../../redux/useActions';

function UnSelectIcon() {
  return (
    <>
      <title>bookmark</title>
      <g
        strokeLinejoin="miter"
        fill="#212121"
        strokeLinecap="butt"
        className="nc-icon-wrapper"
      >
        <path
          d="M41,45,24,35,7,45V6a4,4,0,0,1,4-4H37a4,4,0,0,1,4,4Z"
          fill="none"
          stroke="#212121"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></path>
      </g>
    </>
  );
}

function SelectIcon() {
  return (
    <>
      <title>bookmark</title>
      <g fill="#212121" className="nc-icon-wrapper">
        <path
          d="M37,1H11A5.006,5.006,0,0,0,6,6V46a1,1,0,0,0,1.507.862L24,37.16l16.493,9.7A1,1,0,0,0,42,46V6A5.006,5.006,0,0,0,37,1Z"
          fill="red"
        ></path>
      </g>
    </>
  );
}

type Props = {
  itemData: IGame;
  isSelect: boolean;
};

export function Item(props: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectItem, unSelectItem } = useActions();

  const selectItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (props.isSelect) {
      unSelectItem(props.itemData.id);
    } else {
      selectItem(props.itemData);
    }
  };

  return (
    <div
      className={s.item + ' unselectable'}
      data-testid="card-element"
      onClick={() => {
        const starShipId = searchParams.get('item');
        if (!starShipId) {
          setSearchParams((params) => {
            params.set('item', props.itemData.id.toString());
            return params;
          });
        }
      }}
    >
      <div className={s.gameName}>{props.itemData.name}</div>
      <div className={s.releaseDate}>{props.itemData.released}</div>
      <button className={s.selectItemButton} onClick={selectItemHandler}>
        <svg
          className={s.buttonIcon}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
        >
          {props.isSelect ? <SelectIcon /> : <UnSelectIcon />}
        </svg>
      </button>
    </div>
  );
}
