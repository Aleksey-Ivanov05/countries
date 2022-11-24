import React from 'react';
import Countries from "./components/Countries/Countries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  return (
    <div className="container d-flex mt-3">
      <Countries/>
      <CountryInfo/>
    </div>
  );
}

export default App;
