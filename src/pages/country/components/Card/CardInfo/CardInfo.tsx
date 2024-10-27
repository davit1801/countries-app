import React, { PropsWithChildren } from "react";
import styles from "./CardInfo.module.css";
import { CountryType } from "@/pages/country/views/list/reducer/state";

interface ComponentProps {
  country: CountryType;
}

const CardInfo: React.FC<PropsWithChildren<ComponentProps>> = ({ country }) => {
  return (
    <div className={styles.country_info}>
      <h3 className={styles.country_name}>{country.name}</h3>
      <h4 className={styles.country_city}>Capital: {country.capital}</h4>
      <h5 className={styles.country_population}>
        Population: {(country.population / 1000000).toFixed(1)} Million
      </h5>
    </div>
  );
};

export default CardInfo;
