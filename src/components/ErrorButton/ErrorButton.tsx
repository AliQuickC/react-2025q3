import s from './ErrorButton.module.sass';
import * as React from 'react';
type Props = object;
type State = { isError: boolean };

export class ErrorButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false };
  }

  render() {
    if (this.state.isError) {
      throw new Error('Wrong!!!');
    }

    return (
      <div className={s.ErrorButton}>
        <button
          className={s.trowButton}
          onClick={() => {
            this.setState({ isError: true });
          }}
        >
          generate throw
        </button>
      </div>
    );
  }
}
