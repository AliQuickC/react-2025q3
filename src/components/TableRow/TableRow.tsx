import s from './TableRow.module.sass';

type Props = {
  rowData: (number | string | undefined)[];
  cellsConfig: { width: string[] };
};

export function TableRow(props: Props) {
  const rowcells = props.rowData.map((item, index) => (
    <div
      key={index}
      className={s.cell}
      style={{ width: props.cellsConfig.width[index] }}
    >
      {item === undefined ? 'N/A' : item}
    </div>
  ));
  return <div className={s.row}>{rowcells}</div>;
}
