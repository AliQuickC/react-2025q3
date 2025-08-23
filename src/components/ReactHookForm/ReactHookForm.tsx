import type { JSX } from 'react';

type Props = {
  closeHandler: () => void;
};

export function ReactHookForm(props: Props): JSX.Element {
  return (
    <form>
      <fieldset>
        <legend>ReactHookForm</legend>
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
        <button type="button" onClick={props.closeHandler}>
          Close
        </button>
      </fieldset>
    </form>
  );
}
