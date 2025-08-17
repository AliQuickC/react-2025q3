'use server';

import { IGame } from '../Types/types';
import getSSVContent from '../utils/getCsvContent';
import { prepareSelectData } from '../utils/prepareSelectData';

export async function csvCompile(
  cardsData: IGame[]
): Promise<{ csvContent: string; count: number }> {
  const exportArray: string[][] = prepareSelectData(cardsData);
  const csvContent: string = getSSVContent(exportArray);
  return { csvContent: csvContent, count: exportArray.length };
}
