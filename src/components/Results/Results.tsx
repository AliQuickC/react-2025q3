import type { IGlobalState, SetGameList } from '../../Types/types';
import { ItemsList } from '../ItemsList/ItemsList';
import s from './Results.module.sass';
import React from 'react';

interface IProps {
  globalState: IGlobalState;
  setGameList: SetGameList;
}

interface IState {
  isError: boolean;
}

class Results extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isError: false };
  }

  render() {
    if (this.state.isError) {
      throw new Error('Wrong!!!');
    }

    return (
      <main className={s.main}>
        <div className="container">
          <ItemsList
            globalState={this.props.globalState}
            setGameList={this.props.setGameList}
          />
        </div>
      </main>
    );
  }
}

export default Results;
