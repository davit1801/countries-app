import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './ChangeLangBtn.module.css';

type ChangeLangBtnProps = {
  title: string;
  langName: string;
};

const ChangeLangBtn: React.FC<ChangeLangBtnProps> = ({ title, langName }) => {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <Link to={`${location.pathname.replace(lang, langName)}`}>
      <button
        className={`${styles.lang_btn} ${lang === langName ? styles.active_lang_btn : ''}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default ChangeLangBtn;
