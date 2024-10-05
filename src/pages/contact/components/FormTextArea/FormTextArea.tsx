import styles from '@/pages/contact/components/FormTextArea/FormTextArea.module.css';

type Props = {
  inputName: string;
  placeholder: string;
};

const FormTextArea = ({ placeholder, inputName }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      name={inputName}
      id=""
      required
      rows={8}
      cols={3}
      className={styles.form_textarea}
    ></textarea>
  );
};

export default FormTextArea;
