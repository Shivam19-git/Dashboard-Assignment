import React from 'react';


const Health = () => {
  // Placeholder data
  const carHealth = {
    mileage: "25,000 miles",
    fuelLevel: "80%",
    oilLevel: "Normal",
    tirePressure: "Recommended",
    engineStatus: "Healthy"
  };

  const engineHealth = {
    temperature: "Normal",
    oilPressure: "Normal",
    coolantLevel: "Normal",
    airFilter: "Clean",
    sparkPlugs: "Good"
  };

  return (
    <div className="health-container">
      <h1 className="heading">Vehicle Health Overview</h1>
      <div className="health-details">
        <div className="health-section">
          <h2>Car Health</h2>
          <div className="health-topic">
            <p>Mileage: {carHealth.mileage}</p>
            <p>Fuel Level: {carHealth.fuelLevel}</p>
            <p>Oil Level: {carHealth.oilLevel}</p>
            <p>Tire Pressure: {carHealth.tirePressure}</p>
            <p>Engine Status: {carHealth.engineStatus}</p>
          </div>
        </div>
        <div className="health-section">
          <h2>Engine Health</h2>
          <div className="health-topic">
            <p>Temperature: {engineHealth.temperature}</p>
            <p>Oil Pressure: {engineHealth.oilPressure}</p>
            <p>Coolant Level: {engineHealth.coolantLevel}</p>
            <p>Air Filter: {engineHealth.airFilter}</p>
            <p>Spark Plugs: {engineHealth.sparkPlugs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
