import styles from '@/pages/contact/components/FormInput/Input.module.css'

type Props = {
  type: string;
  inputName: string;
  placeholder: string;
};

const Input = ({ type, placeholder, inputName }: Props) => {
  return (
    <input className={styles.form_input} type={type} placeholder={placeholder} name={inputName} required />
  );
};

export default Input;
