import { useEffect, useState } from 'react';
import Publisher, {
  type ChangeLSWordEvent,
  type publisherEvent,
} from '../utils/event-Publisher';

const StorageAction = 'storage';
const publisher = new Publisher();

export default function useLocalStorage(
  storeKEY: string,
  storageString: string | undefined = undefined
): [string, (word: string) => void] {
  const setLSWord = (word: string) => {
    localStorage.setItem(storeKEY, word);
    publisher.triggerEvent(StorageAction, { newWord: word });
  };

  const getInitialWord = () => {
    let initialWord;
    if (storageString === undefined) {
      initialWord = localStorage.getItem(storeKEY) || '';
    } else {
      initialWord = storageString;
    }
    localStorage.setItem(storeKEY, initialWord);
    return initialWord;
  };

  const [word, setWord] = useState<string>(getInitialWord());

  useEffect(() => {
    const changeLSHandler = (data: publisherEvent): void => {
      setWord((data as ChangeLSWordEvent).newWord);
    };

    const removeEvent = publisher.addEventListener(
      StorageAction,
      changeLSHandler
    );
    return removeEvent;
  }, []);

  return [word, setLSWord];
}
