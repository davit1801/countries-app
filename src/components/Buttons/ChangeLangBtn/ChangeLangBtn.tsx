import { useNavigate } from 'react-router-dom';
import styles from './ChangeLangBtn.module.css';

type ChangeLangBtnProps = {
  title: string;
  langName: string;
};

const ChangeLangBtn: React.FC<ChangeLangBtnProps> = ({ title, langName }) => {
  const navigate = useNavigate();

  const handleChangeLang = (lang: string) => {
    navigate(`/${lang}/countries`);
  };

  return (
    <button
      className={styles.lang_btn}
      onClick={() => handleChangeLang(langName)}
    >
      {title}
    </button>
  );
};

export default ChangeLangBtn;