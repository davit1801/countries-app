import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "@/pages/country/components/DetailsCountry/CountryDetails";
import { countriesInitialState } from "@/pages/country/views/list/reducer/state";

const DetailsCountry: React.FC = () => {
  const [countryData] = useState([...countriesInitialState]);
  const { id } = useParams();

  const countryInfo = countryData.find((country) => country.id === id);

  return countryInfo ? (
    <CountryDetails info={countryInfo} />
  ) : (
    <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>
      Country Not Found!!!
    </h1>
  );
};

export default DetailsCountry;
