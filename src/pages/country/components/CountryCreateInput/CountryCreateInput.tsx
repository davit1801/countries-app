import React, { ChangeEvent } from "react";
import styles from "./CountryCreateInput.module.css";

type countryCreateInputProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  placeholder: string;
  value: string | number;
};

const CountryCreateInput: React.FC<countryCreateInputProps> = ({
  setValue,
  value,
  ...props
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.form_input_container}>
      <input
        className={styles.form_input}
        onChange={handleInputChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default CountryCreateInput;
