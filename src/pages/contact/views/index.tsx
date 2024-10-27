import React from 'react';
import ContactForm from '@/pages/contact/components/ContactForm/ContactForm';
import styles from '@/pages/contact/views/index.module.css';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { useParams } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const { lang } = useParams<ParamsType>();
  const { contactFormTitle } = CONTENT[lang ?? 'ka'];
  return (
    <>
      <h1 className={styles.contact_heading}>{contactFormTitle}</h1>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
