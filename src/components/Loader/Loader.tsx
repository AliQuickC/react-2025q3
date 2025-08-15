import type { JSX } from 'react';
import Image from 'next/image';
import LoaderImage from './loader.gif';

export function Loader(): JSX.Element {
  return (
    <div>
      <Image src={LoaderImage} alt="loader..." priority={true} />
    </div>
  );
}
