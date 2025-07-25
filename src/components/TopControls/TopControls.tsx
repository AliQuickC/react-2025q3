import s from './TopControls.module.sass';
import Search from '../Search/Search';
import type { IGlobalState, setFindWord, onSearch } from '../../Types/types';
import type { JSX } from 'react';

interface IProps {
  onSearch: onSearch;
  setFindWord: setFindWord;
  globalState: IGlobalState;
}

function TopControls(props: IProps): JSX.Element {
  return (
    <header className={s.header} data-testid="header-element">
      <div className={`container ${s.headerContainer} `}>
        <Search
          globalState={props.globalState}
          onSearch={props.onSearch}
          setSearchWord={props.setFindWord}
        />
      </div>
    </header>
  );
}

export default TopControls;
