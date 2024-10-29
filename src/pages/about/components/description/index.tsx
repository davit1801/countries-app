import CONTENT, { ParamsType } from '@/static/siteContent';
import React from 'react';
import { useParams } from 'react-router-dom';

const AboutDescription: React.FC = () => {
  const { lang } = useParams<ParamsType>();
  const { aboutPageText } = CONTENT[lang ?? 'ka'];
  
  return (
    <div style={{ textAlign: 'center', fontSize: '2.4rem' }}>
      {aboutPageText}
    </div>
  );
};

export default AboutDescription;
