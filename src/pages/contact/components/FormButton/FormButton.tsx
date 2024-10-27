import React from 'react';
import styles from '@/pages/contact/components/FormButton/FormButton.module.css';

type FormButtonProps = {
  text: string;
};

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
  return (
    <button type="submit" className={styles.form_btn}>
      {text}
    </button>
  );
};

export default FormButton;
