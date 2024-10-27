import { useNavigate, useParams } from "react-router-dom";
import styles from "./ChangeLangBtn.module.css";

type ChangeLangBtnProps = {
  title: string;
  langName: string;
};

const ChangeLangBtn: React.FC<ChangeLangBtnProps> = ({ title, langName }) => {
  const { lang } = useParams();
  const navigate = useNavigate();

  const handleChangeLang = (languageName: string) => {
    navigate(`/${languageName}/countries`);
  };

  return (
    <button
      className={`${styles.lang_btn} ${
        lang === langName ? styles.active_lang_btn : ""
      }`}
      onClick={() => handleChangeLang(langName)}
    >
      {title}
    </button>
  );
};

export default ChangeLangBtn;
