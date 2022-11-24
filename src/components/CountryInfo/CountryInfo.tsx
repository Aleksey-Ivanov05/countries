import React, {useCallback, useEffect, useState} from 'react';
import {CountryInformation, Info} from "../../types";
import axios from "axios";

interface Props {
  id: string | null;
}

const CountryInfo: React.FC<Props> = ({id}) => {
  const [country, setCountry] = useState<Info | null>(null);

  const fetchCountryInfo = useCallback(async (id: string) => {
    const response = await axios.get<CountryInformation>('/alpha/' + id);
    const borders: string[] = response.data['borders'];
    const promises = borders ? borders.map(async border => {
      const borderResponse = await axios.get<CountryInformation>('/alpha/' + border);
      return borderResponse.data.name;
    }) : [];

    const newBorders = await Promise.all(promises);

    setCountry({
      name: response.data.name,
      capital: response.data.capital,
      population: response.data.population,
      image: response.data.flags.png,
      borders: newBorders,
    })
  }, [])

  useEffect(() => {
    if (id !== null) {
      fetchCountryInfo(id).catch(console.error);
    }
  }, [id, fetchCountryInfo]);

  return country ? (
    <div className="flex-grow-1 border border-dark p-2">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mb-3">{country.name}</h3>
          <p className="m-0">Capital: {country.capital}</p>
          <p className="m-0">Population: {country.population}</p>
        </div>
        <div>
          <img src={country.image} alt="flag"/>
        </div>
      </div>
      {country.borders.length > 0 ? (
        <div>
          <p className="fw-bold">Borders with: </p>
          <ul>
            {country.borders.map(border => (
              <li key={border}>{border}</li>
            ))}
          </ul>
        </div>) : (<div>The country does not border anyone</div>)}
    </div>
  ) : (<h2>Choose the country!</h2>)
};

export default CountryInfo;