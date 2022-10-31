import { styles } from './NodeHeader.css';


type Props = {
  label: string;
};

export function NodeHeader({ label }: Props) {
  return (
    <div className={styles.nodeHeader}>{label}</div>
  );
}
