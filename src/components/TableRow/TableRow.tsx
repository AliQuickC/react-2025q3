import s from './TableRow.module.sass';

type Props = {
  rowData: (number | string | undefined)[];
  celsConfig: { width: string[] };
};

export function TableRow(props: Props) {
  const rowCels = props.rowData.map((item, index) => (
    <div
      key={index}
      className={s.cel}
      style={{ width: props.celsConfig.width[index] }}
    >
      {item === undefined ? 'N/A' : item}
    </div>
  ));
  return <div className={s.row}>{rowCels}</div>;
}
