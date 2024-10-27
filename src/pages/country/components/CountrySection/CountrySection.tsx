import styles from "./countrySection.module.css";
import { PropsWithChildren } from "react";
import CONTENT, { ParamsType } from "@/static/siteContent";
import { useParams } from "react-router-dom";

const CountrySection: React.FC<PropsWithChildren> = ({ children }) => {
  const { lang } = useParams<ParamsType>();
  const { countriesHeading } = CONTENT[lang ?? "ka"];

  return (
    <section className={styles.country_section}>
      <h2 className={styles.country_heading}>{countriesHeading}</h2>
      {children}
    </section>
  );
};

export default CountrySection;
