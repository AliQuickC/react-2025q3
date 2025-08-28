import s from './TableRow.module.sass';

type Props = {
  columns: string[];
  celsConfig: { width: string[] };
};

export function TableHeader(props: Props) {
  const tableHeaderLayout = props.columns.map((item, index) => (
    <div
      key={index}
      className={s.cel}
      style={{ width: props.celsConfig.width[index] }}
    >
      {item}
    </div>
  ));
  return <div className={s.headerRow}>{tableHeaderLayout}</div>;
}
