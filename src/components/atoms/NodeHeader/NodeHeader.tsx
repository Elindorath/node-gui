import { styles } from './NodeHeader.style';


type Props = {
  label: string;
};

export function NodeHeader({ label }: Props) {
  return (
    <div css={styles.nodeHeader}>{label}</div>
  );
}
