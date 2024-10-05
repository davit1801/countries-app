import styles from '@/pages/contact/components/FormButton/FormButton.module.css';

const FormButton = () => {
  return (
    <button type="submit" className={styles.form_btn}>
      SEND
    </button>
  );
};

export default FormButton;
