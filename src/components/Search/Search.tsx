import { useEffect, useState, type JSX } from 'react';
import s from './Search.module.sass';
import type { IGlobalState, setFindWord, onSearch } from '../../Types/types';

interface IProps {
  onSearch: onSearch;
  setSearchWord: setFindWord;
  globalState: IGlobalState;
}

function Search(props: IProps): JSX.Element {
  const [findWord, setFindWord] = useState<string>('');

  useEffect(() => {
    setFindWord(props.globalState.findWord);
  }, [props.globalState.findWord]);

  const findHandler = () => {
    const word = findWord.trim();
    props.setSearchWord(word);
    props.onSearch(word);
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
