import { vi } from 'vitest';
import * as api from '../src/api/api';

export const mocRequestGames = vi.spyOn(api, 'requestGames');
export const mocRequestFindGames = vi.spyOn(api, 'requestFindGames');
