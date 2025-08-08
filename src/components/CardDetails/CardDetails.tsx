import { useSearchParams } from 'react-router-dom';
import s from './CardDetails.module.sass';
import { Loader } from '../Loader/Loader';
import { useGetGemeDetailsQuery } from '../../redux/gameApi';
import { getErrorInfo } from '../../utils/utils';
import { notDataMessage } from '../../const/const';

type Props = {
  item: string;
};

export default function CardDetails(props: Props) {
  const [, setDetailsParam] = useSearchParams();

  const { data, error, isLoading } = useGetGemeDetailsQuery(props.item);

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
          {error ? (
            <div className={'error-data'}>{getErrorInfo(error)}</div>
          ) : isLoading ? (
            <Loader />
          ) : data ? (
            <div className={s.detailsData}>
              <img
                className={s.gameImage}
                src={data.detailData?.background_image}
                alt="game image"
              />
              <p>
                <span>Name: </span>
                <span>{data.detailData?.name}</span>
              </p>
              <p>
                <span>Ganres: </span>
                <span>{data.detailData?.genres}</span>
              </p>
            </div>
          ) : (
            <div className={'error-data'}>{notDataMessage}</div>
          )}
        </div>
      </div>
    </>
  );
}
