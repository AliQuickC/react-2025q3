import { useEffect, useState, type JSX } from 'react';
import s from './Search.module.sass';
import type { IGlobalState, onSearch } from '../../Types/types';
import useLocalStorage from '../../hooks/useLocalStorage';
import { storeKEY } from '../../const/const';

interface IProps {
  onSearch: onSearch;
  globalState: IGlobalState;
}

function Search(props: IProps): JSX.Element {
  const [findWord, setFindWord] = useState<string>('');
  const [lsWord, setLSWord] = useLocalStorage(storeKEY);

  useEffect(() => {
    setFindWord(lsWord);
  }, [lsWord]);

  const findHandler = () => {
    const word = findWord.trim();
    setLSWord(word);
    props.onSearch();
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
