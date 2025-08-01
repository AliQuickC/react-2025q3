import { useSearchParams } from 'react-router-dom';
import s from './CardDetails.module.sass';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { requestDetail } from '../../api/api';
import { useDetails } from '../../redux/useAppSelector';
import { useActions } from '../../redux/useActions';

type Props = {
  item: string | null;
};

export default function CardDetails(props: Props) {
  const [, setDetailsParam] = useSearchParams();
  const { detailsRequestOn, setDetails } = useActions();
  const { detailData, haveData } = useDetails();

  useEffect(() => {
    if (props.item !== null) {
      detailsRequestOn(Number(props.item));
    }
  }, [detailsRequestOn, props.item]);

  useEffect(() => {
    if (!haveData && props.item) {
      requestDetail(props.item, setDetails);
    }
  }, [haveData, props.item, setDetails]);

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
          {haveData && detailData ? (
            <div className={s.DetailsData}>
              <img
                className={s.GameImage}
                src={detailData.background_image}
                alt="game image"
              />
              <p>
                <span>Name: </span>
                <span>{detailData.name}</span>
              </p>
              <p>
                <span>Ganres: </span>
                <span>{detailData.genres}</span>
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
