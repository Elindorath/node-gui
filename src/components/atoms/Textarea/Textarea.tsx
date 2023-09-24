import { styles } from './Textarea.css';

import type { ChangeEventHandler } from 'react';


type TextareaProps = {
  onChange?: ChangeEventHandler;
  placeholder?: string;
};

export const Textarea = function Textarea({ onChange, placeholder }: TextareaProps) {
  return (
    <div className="nodrag nowheel">
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        onChange={onChange}
        rows={5}
      />
    </div>
  );
};
