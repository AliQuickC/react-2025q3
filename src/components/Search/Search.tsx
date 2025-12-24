import { useEffect, useState, type ChangeEventHandler, type JSX } from 'react';
import s from './Search.module.sass';
import { FIRST_PAGE } from '../../const/const';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

interface Props {
  lsWord: string;
}

function Search(props: Props): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const [findWord, setFindWord] = useState<string>('');
  const debouncedSearchTerm = useDebounce(findWord, 1000);

  useEffect(() => {
    setFindWord(props.lsWord);
  }, [props.lsWord]);

  useEffect(() => {
    const search = () => {
      const word = findWord.trim();

      if (word) {
        setSearchParams({ page: '' + FIRST_PAGE, search: word });
      } else {
        setSearchParams({ page: '' + FIRST_PAGE });
      }
    };

    search();
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFindWord(event.target.value);
  };

  return (
    <div className={s.search} data-testid="search-element">
      <input
        className={s.searchInput}
        type="text"
        placeholder="find..."
        value={findWord}
        onChange={onChangeHandler}
      />
      <button className={s.findButton} aria-label="find"></button>
    </div>
  );
}

export default Search;
