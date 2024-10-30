import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './OTPInputs.module.css';

type ComponentProps = {
  inputQnty: number;
};

const OTPInputs: React.FC<ComponentProps> = ({ inputQnty }) => {
  const [inputs, setInputs] = useState<string[]>(Array(inputQnty).fill(''));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setInputs(Array(inputQnty).fill(''));
  }, [inputQnty]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) return;

    const newArr = [...inputs];
    newArr[index] = value;
    setInputs(newArr);

    if (value && index < inputQnty - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === inputs.length - 1 && inputRefs.current[index]?.value !== '') {
      inputRefs.current[index]?.blur();
    }
  };

  function handleBackspaceAndEnter(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === 'Enter' && e.currentTarget.value && index < inputQnty - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    startIdx: number,
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('Text').replace(/\D/g, '');

    const newInputs = [...inputs];
    for (let i = 0; i < pastedData.length; i++) {
      const currentIndex = startIdx + i;
      if (currentIndex < inputQnty) {
        newInputs[currentIndex] = pastedData[i];
      }
    }

    setInputs(newInputs);

    const nextEmptyIndex = newInputs.findIndex(
      (val, idx) => val === '' && idx >= startIdx,
    );
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[inputQnty - 1]?.blur();
    }
  };

  return (
    <div className={styles.inputs_container}>
      {inputs.map((input, index) => {
        return (
          <input
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            key={index}
            value={input}
            onChange={(e) => handleChange(e, index)}
            maxLength={1}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            onPaste={(e) => handlePaste(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTPInputs;
