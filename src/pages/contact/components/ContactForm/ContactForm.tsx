import React, { FormEvent } from 'react';
import styles from '@/pages/contact/components/ContactForm/ContactForm.module.css';
import Input from '@/pages/contact/components/FormInput/Input';
import FormTextArea from '@/pages/contact/components/FormTextArea/FormTextArea';
import FormButton from '@/pages/contact/components/FormButton/FormButton';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formValuesObj: any = {};

  const formValues = new FormData(event.currentTarget);

  for (const [key, value] of formValues) {
    formValuesObj[key] = value;
  }

  form.reset();
};

const ContactForm: React.FC = () => {
  return (
    <form
      onSubmit={handleSubmit}
      name="contact-form"
      className={styles.contact_form}
    >
      <div className={styles.input_names}>
        <Input inputName="firstname" placeholder="First Name" type="text" />
        <Input inputName="lastname" placeholder="Last Name" type="text" />
      </div>
      <Input inputName="email" placeholder="Email" type="email" />
      <FormTextArea inputName="textarea" placeholder="Message" />
      <FormButton />
    </form>
  );
};

export default ContactForm;
