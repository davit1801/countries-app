import React, { Dispatch } from "react";
import styles from "./SortSelect.module.css";
import { countriesReducerAction } from "@/pages/country/views/list/reducer/reducer";
import { useParams } from "react-router-dom";
import CONTENT, { ParamsType } from "@/static/siteContent";

type PropsType = {
  dispatch: Dispatch<countriesReducerAction>;
};

const SortSelect: React.FC<PropsType> = ({ dispatch }) => {
  const { lang } = useParams<ParamsType>();
  const { countrySort } = CONTENT[lang ?? "ka"];
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "sort",
      payload: {
        sortType: e.target.value,
      },
    });
  };

  return (
    <select onChange={handleSortChange} className={styles.select_input}>
      <option hidden>{countrySort.title}</option>
      <option value="decrease">{countrySort.decrease}</option>
      <option value="increase">{countrySort.increase}</option>
    </select>
  );
};

export default SortSelect;
