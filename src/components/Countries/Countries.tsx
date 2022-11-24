import React, {useCallback, useEffect, useState} from 'react';
import Country from "./Country";
import {CountryName} from "../../types";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState<CountryName[]>([]);
  const fetchData = useCallback(async () => {
    const response = await axios.get<CountryName[]>('/all?fields=alpha3Code,name');
    setCountries(response.data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData])

  return (
    <div className="border border-dark p-3 overflow-auto me-5" style={{maxHeight: '400px'}}>
      {countries.map(country => (
        <Country key={country.alpha3Code} name={country.name}/>
      ))}
    </div>
  );
};

export default Countries;
