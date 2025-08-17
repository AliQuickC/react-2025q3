import s from './AboutPage.module.sass';
import * as React from 'react';
import { type JSX } from 'react';
import Link from 'next/link';

export default function About(): JSX.Element {
  return (
    <div>
      <div className={`container `}>
        <h2>About</h2>
        <p>
          <span>Author: </span>
          <span className={s.authorName}>Alekhin Aleksandr</span>
        </p>
        <p>
          <span>Course: </span>
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noreferrer"
          >
            RS School React
          </a>
        </p>
        <Link className={`${s.homeButton} app-button`} href="/">
          Home page
        </Link>
      </div>
    </div>
  );
}
