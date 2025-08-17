import { useEffect, useState, type JSX } from 'react';
import s from './Search.module.sass';
import { FIRST_PAGE, storeKEY } from '../../const/const';
import { usePathname, useRouter } from 'next/navigation';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslations } from 'next-intl';

function Search(): JSX.Element {
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);
  const [findWord, setFindWord] = useState<string>('');

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setFindWord(lsWord);
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findHandler = () => {
    const word = findWord.trim();

    setLSWord(word);

    if (word) {
      router.push(pathname + '?' + 'page=' + FIRST_PAGE + '&search=' + word);
    } else {
      router.push(pathname + '?' + 'page=' + FIRST_PAGE);
    }
  };

  const t = useTranslations('FindPanel');

  return (
    <div className={s.search} data-testid="search-element">
      <input
        className={s.searchInput}
        type="text"
        placeholder={t('placeholder')}
        value={findWord}
        onChange={(event) => {
          setFindWord(event.target.value);
        }}
      />
      <button
        className={s.findButton}
        onClick={findHandler}
        aria-label="find"
      ></button>
    </div>
  );
}

export default Search;
