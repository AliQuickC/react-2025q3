import { useSearchParams } from 'react-router-dom';
import s from './CardDetails.module.sass';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import { requestDetail } from '../../api/api';
import type { GameDetail } from '../../Types/types';

type Props = {
  item: string | null;
};

export default function CardDetails(props: Props) {
  const [, setDetailsParam] = useSearchParams();
  const [details, setDetails] = useState<GameDetail>({
    detailData: null,
    haveData: false,
  });

  useEffect(() => {
    if (props.item !== null) {
      setDetails({
        detailData: null,
        haveData: false,
      });
    }
  }, [props.item]);

  useEffect(() => {
    if (!details.haveData && props.item) {
      requestDetail(props.item, setDetails);
    }

    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details.haveData]);

  return (
    <>
      <div className={s.CardDetails} data-testid="detail-element">
        <button
          className={s.closeButton + ' app-button'}
          onClick={() => {
            setDetailsParam((params) => {
              params.delete('item');
              return params;
            });
          }}
        >
          close
        </button>
        <div className={s.DetailsDataPanel}>
          {details.haveData && details.detailData ? (
            <div className={s.DetailsData}>
              <img
                className={s.GameImage}
                src={details.detailData.background_image}
                alt="game image"
              />
              <p>
                <span>Name: </span>
                <span>{details.detailData.name}</span>
              </p>
              <p>
                <span>Ganres: </span>
                <span>{details.detailData.genres}</span>
              </p>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}
