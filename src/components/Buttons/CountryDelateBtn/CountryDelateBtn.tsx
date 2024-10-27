import { countriesReducerAction } from "@/pages/country/views/list/reducer/reducer";
import { CountryType } from "@/pages/country/views/list/reducer/state";
import React, { Dispatch } from "react";
import styles from "./CountryDelateBtn.module.css";
import { MdDelete, MdRestore } from "react-icons/md";

interface ComponentProps {
  country: CountryType;
  dispatch: Dispatch<countriesReducerAction>;
}

const CountryDelateBtn: React.FC<ComponentProps> = ({ country, dispatch }) => {
  const handleDeleteCard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch({
      type: "delete",
      payload: {
        id: country.id,
      },
    });
  };
  return (
    // <button
    //   className={country.active ? styles.delete_btn : styles.recovery_btn}
    //   onClick={handleDeleteCard}
    // >
    //   {country.active ? <MdDelete /> : 'Recovery Card'}
    // </button>
    <button
      className={country.active ? styles.delete_btn : styles.recovery_btn}
      onClick={handleDeleteCard}
    >
      {country.active ? <MdDelete /> : <MdRestore />}
    </button>
  );
};

export default CountryDelateBtn;
