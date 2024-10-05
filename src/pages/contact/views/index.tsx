import React from 'react';
import ContactForm from '@/pages/contact/components/ContactForm/ContactForm';
import styles from '@/pages/contact/views/index.module.css';

const ContactPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.contact_heading}>Get in touch with us</h1>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
