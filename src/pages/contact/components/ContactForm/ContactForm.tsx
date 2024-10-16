import React, { FormEvent, useState } from 'react';
import styles from '@/pages/contact/components/ContactForm/ContactForm.module.css';
import Input from '@/pages/contact/components/FormInput/Input';
import FormTextArea from '@/pages/contact/components/FormTextArea/FormTextArea';
import FormButton from '@/pages/contact/components/FormButton/FormButton';

const ContactForm: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      firstname,
      lastName,
      email,
      textarea,
    };
    console.log(formData);
    setFirstname('');
    setLastname('');
    setEmail('');
    setTextarea('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="contact-form"
      className={styles.contact_form}
    >
      <div className={styles.input_names}>
        <Input
          name="firstname"
          placeholder="First Name"
          type="text"
          value={firstname}
          setValue={setFirstname}
        />
        <Input
          name="lastname"
          placeholder="Last Name"
          type="text"
          value={lastName}
          setValue={setLastname}
        />
      </div>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <FormTextArea
        name="textarea"
        placeholder="Message"
        value={textarea}
        setValue={setTextarea}
      />
      <FormButton />
    </form>
  );
};

export default ContactForm;
