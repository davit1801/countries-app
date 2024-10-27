import styles from '@/pages/contact/components/FormInput/Input.module.css';
import { ChangeEvent } from 'react';

type inputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  name: string;
  placeholder: string;
};

const Input: React.FC<inputProps> = ({ setValue, ...props }) => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <input
      required
      className={styles.form_input}
      onChange={handleChangeInput}
      {...props}
    />
  );
};

export default Input;
