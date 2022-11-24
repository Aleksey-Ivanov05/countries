import React, {useCallback, useEffect, useState} from 'react';
import Country from "./Country";
import {CountryName} from "../../types";
import axios from "axios";
import CountryInfo from "../CountryInfo/CountryInfo";

const Countries = () => {
  const [countries, setCountries] = useState<CountryName[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const fetchData = useCallback(async () => {
    const response = await axios.get<CountryName[]>('/all?fields=alpha3Code,name');
    setCountries(response.data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData])

  return (
    <div className="container d-flex mt-3">
      <div className="border border-dark p-3 overflow-auto me-5" style={{maxHeight: '400px'}}>
        {countries.map(country => (
          <Country key={country.alpha3Code} name={country.name} onClick={() => setSelectedCountry(country.alpha3Code)}/>
        ))}
      </div>
      <CountryInfo id={selectedCountry}/>
    </div>

  );
};

export default Countries;
