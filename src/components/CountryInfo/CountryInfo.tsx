import React from 'react';

const CountryInfo = () => {
  return (
    <div className="flex-grow-1 border border-dark p-2">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mb-3">Kyrgyzstan</h3>
          <p className="m-0">Capital: Bishkek</p>
          <p className="m-0">Population: 6591600</p>
        </div>
        <div>
          <img src="https://flagcdn.com/w320/kg.png" alt="flag"/>
        </div>
      </div>
      <div>
        <p className="fw-bold">Borders with: </p>
        <ul>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
          <li>Kazakhstan</li>
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo;