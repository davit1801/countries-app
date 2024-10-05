import React from 'react';
import styles from '@/pages/contact/components/ContactForm/ContactForm.module.css';
import Input from '@/pages/contact/components/FormInput/Input';
import FormTextArea from '@/pages/contact/components/FormTextArea/FormTextArea';
import FormButton from '@/pages/contact/components/FormButton/FormButton';

const handleSubmit = (event: React.FormEvent<EventTarget>) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const formData = {
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    email: form.email.value,
  };

  console.log(formData);
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
