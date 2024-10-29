import React, { ChangeEvent } from 'react';
import styles from './CountryCreateInput.module.css';

type countryCreateInputProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  accept?: string;
};

const CountryCreateInput: React.FC<countryCreateInputProps> = ({
  setValue,
  type = 'text',
  ...props
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { type, files, value } = event.target;

    if (type === 'text') {
      setValue(value);
    } else if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
          setValue(reader.result);
        }
      };

      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  };

  return (
    <div className={styles.form_input_container}>
      <input
        className={styles.form_input}
        onChange={handleInputChange}
        type={type}
        {...props}
      />
    </div>
  );
};

export default CountryCreateInput;
