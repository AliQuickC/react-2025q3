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
  const { detailData, isLoading } = useDetails();

  useEffect(() => {
    if (props.item !== null) {
      detailsRequestOn(Number(props.item));
    }
  }, [detailsRequestOn, props.item]);

  useEffect(() => {
    if (!isLoading && props.item) {
      requestDetail(props.item, setDetails);
    }
  }, [isLoading, props.item, setDetails]);

  return (
    <>
      <div className={s.cardDetails} data-testid="detail-element">
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
        <div className={s.detailsDataPanel}>
          {isLoading && detailData ? (
            <div className={s.detailsData}>
              <img
                className={s.gameImage}
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
