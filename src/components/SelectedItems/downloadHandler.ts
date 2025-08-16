import { csvCompile } from '../../app/action';
import type { IGame } from '../../Types/types';

const downloadCsv = (filename: string, csvString: string) => {
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadHandler = async (items: IGame[]) => {
  const { csvContent, count } = await csvCompile(items);
  downloadCsv(`${count - 1 + ''}_game${count > 2 ? 's' : ''}.csv`, csvContent);
};
