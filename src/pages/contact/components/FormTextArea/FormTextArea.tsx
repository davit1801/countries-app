import styles from '@/pages/contact/components/FormTextArea/FormTextArea.module.css';
import { ChangeEvent } from 'react';

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  name: string;
  placeholder: string;
};

const FormTextArea = ({ setValue, ...props }: Props) => {
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <textarea
      className={styles.form_textarea}
      onChange={handleChangeTextarea}
      cols={3}
      rows={8}
      {...props}
    ></textarea>
  );
};

export default FormTextArea;
