import { useEffect, useState, type JSX } from 'react';
import s from './Search.module.sass';
import useLocalStorage from '../../hooks/useLocalStorage';
import { FIRST_PAGE, storeKEY } from '../../const/const';
import { useSearchParams } from 'react-router-dom';

function Search(): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const [findWord, setFindWord] = useState<string>('');
  const [lsWord] = useLocalStorage(storeKEY);

  useEffect(() => {
    setFindWord(lsWord);
  }, [lsWord]);

  const findHandler = () => {
    const word = findWord.trim();

    if (word) {
      setSearchParams({ page: '' + FIRST_PAGE, search: word });
    } else {
      setSearchParams({ page: '' + FIRST_PAGE });
    }
  };

  return (
    <div className={s.search} data-testid="search-element">
      <input
        className={s.searchInput}
        type="text"
        placeholder="find..."
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
