import s from './TableRow.module.sass';

type Props = {
  columns: string[];
  cellsConfig: { width: string[] };
};

export function TableHeader(props: Props) {
  const tableHeaderLayout = props.columns.map((item, index) => (
    <div
      key={index}
      className={s.cell}
      style={{ width: props.cellsConfig.width[index] }}
    >
      {item}
    </div>
  ));
  return <div className={s.headerRow}>{tableHeaderLayout}</div>;
}
