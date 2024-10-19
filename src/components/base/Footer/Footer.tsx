import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '@/components/base/Footer/Footer.module.css';
import CONTENT from '@/static/siteContent';

const Footer: React.FC = () => {
  const { lang } = useParams();
  const { copyrightTitle } = CONTENT[lang ?? 'ka'];
  return (
    <footer className={styles.footer}>
      <p>{copyrightTitle}</p>
    </footer>
  );
};

export default Footer;
