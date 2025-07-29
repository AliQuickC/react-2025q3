import { useState, useEffect } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, (value: string) => void] {
  const [lsKey] = useState<string>(key);

  const [lsWord, setLSWord] = useState<string>(
    () => localStorage.getItem(lsKey) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(lsKey, lsWord);
  }, [lsWord, lsKey]);

  return [lsWord, setLSWord];
}
