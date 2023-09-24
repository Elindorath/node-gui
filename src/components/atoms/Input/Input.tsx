import { useCallback, useState } from 'react';

import { styles } from './Input.css';

import type { HTMLInputTypeAttribute, ChangeEvent} from 'react';
import type { IconType } from 'react-icons';


type InputProps = {
  type?: HTMLInputTypeAttribute;
  Icon?: IconType;
  placeholder?: string;
};

export const Input = function Input({ type = 'text', Icon, placeholder }: InputProps) {
  const [value, setValue] = useState('');
  const isFileType = type === 'file';

  // const onChange = useCallback(
  //   (event: ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.files?.[0].name ?? '');
  //   },
  //   []
  // );

  return (
    <div className="nodrag nowheel">
      <label className={styles.label({
        file: isFileType,
      })}>
        {Icon && <Icon />}
        <input
          type={type}
          placeholder={placeholder}
          hidden={isFileType}
          onChange={(event) => { setValue(event.target.files?.[0]?.name ?? ''); }}
          className={styles.input}
        />
        {isFileType && <span className={styles.filePlaceholder}>{value || 'Select a file...'}</span>}
      </label>
    </div>
  );
};
