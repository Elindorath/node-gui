import { styles } from './Curve.style';


export const Curve = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" css={styles.curve}>
      <path
        d={`M 0,0 C 50,0 50,100 100,100`}
        fill="none"
        stroke="red"
        strokeWidth={2}
      />
    </svg>
  );
};
