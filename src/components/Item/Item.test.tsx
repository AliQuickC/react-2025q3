import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import type { IGame } from '../../Types/types';
import { Item } from './Item';

const mocGames: IGame[] = [
  {
    id: 3498,
    name: 'Grand Theft Auto V',
    released: '2013-09-17',
    ratings_count: 7151,
  },
  {
    id: 3328,
    name: 'The Witcher 3: Wild Hunt',
    released: '2015-05-18',
    ratings_count: 6958,
  },
  {
    id: 4200,
    name: 'Portal 2',
    released: '2011-04-18',
    ratings_count: 5939,
  },
  {
    id: 4291,
    name: 'Counter-Strike: Global Offensive',
    released: '2012-08-21',
    ratings_count: 3586,
  },
];

describe('Rendering Tests', () => {
  test('Renders correct number of items when data is provided, loading states', () => {
    const { rerender } = render(
      <Item key={mocGames[0].id} itemData={mocGames[0]} />
    );

    let name = mocGames[0].name;
    let released = mocGames[0].released;
    expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(released))).toBeInTheDocument();

    rerender(<Item key={mocGames[1].id} itemData={mocGames[1]} />);

    name = mocGames[1].name;
    released = mocGames[1].released;
    expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(released))).toBeInTheDocument();
  });
});
