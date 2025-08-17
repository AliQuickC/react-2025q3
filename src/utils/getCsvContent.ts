const getSSVContent = (array: string[][]): string => {
  return array
    .map((row) =>
      row.map((field) => `"${field.toString().replace(/"/g, '""')}"`).join(',')
    )
    .join('\n');
};

export default getSSVContent;
