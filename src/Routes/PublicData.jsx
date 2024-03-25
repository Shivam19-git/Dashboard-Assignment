import React from 'react';


const PublicData = () => {
  const country = "United States";
  const population = "331 million";
  const capital = "Washington, D.C.";
  const language = "English";
  const currency = "US Dollar (USD)";

  return (
    <div className="public-data-container">
      <h1 className="heading">Country Information</h1>
      <div className="data-details">
        <div className="data-topic">
          <h2>Country</h2>
          <p>{country}</p>
        </div>
        <div className="data-topic">
          <h2>Population</h2>
          <p>{population}</p>
        </div>
        <div className="data-topic">
          <h2>Capital</h2>
          <p>{capital}</p>
        </div>
        <div className="data-topic">
          <h2>Language</h2>
          <p>{language}</p>
        </div>
        <div className="data-topic">
          <h2>Currency</h2>
          <p>{currency}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicData;
