import s from './CardDetails.module.sass';
import { Loader } from '../Loader/Loader';
import { useGetGameDetailsQuery } from '../../redux/gameApi';
import { getErrorInfo } from '../../utils/utils';
import { notDataMessage } from '../../const/const';
import { useCardList } from '../../redux/useAppSelector';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

type Props = {
  item: string;
};

export default function CardDetails(props: Props) {
  const { enableCacheGameDetails } = useCardList();

  const { data, error, isLoading } = useGetGameDetailsQuery(props.item, {
    refetchOnMountOrArgChange: !enableCacheGameDetails,
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const closeHandler = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('item');
    router.push(pathname + '?' + params);
  };

  return (
    <>
      <div className={s.cardDetails} data-testid="detail-element">
        <button
          className={s.closeButton + ' app-button'}
          onClick={closeHandler}
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
              <Image
                className={s.gameImage}
                src={data.detailData?.background_image}
                alt="game image"
                width={400}
                height={576}
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
