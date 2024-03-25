import React from 'react';
 

const Specs = () => {

  const carSpecs = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    engine: "2.5L Inline-4",
    horsepower: "203 hp",
    torque: "184 lb-ft",
    transmission: "8-Speed Automatic",
    drivetrain: "Front-Wheel Drive",
    fuelEconomy: "28 MPG City / 39 MPG Highway"
  };

  return (
    <div className="specs-container">
      <h1 className="heading">Vehicle Specifications</h1>
      <div className="specs-details">
        <div className="specs-section">
          <h2>Car Info</h2>
          <div className="specs-topic">
            <p>Make: {carSpecs.make}</p>
            <p>Model: {carSpecs.model}</p>
            <p>Year: {carSpecs.year}</p>
          </div>
        </div>
        <div className="specs-section">
          <h2>Engine</h2>
          <div className="specs-topic">
            <p>Engine: {carSpecs.engine}</p>
            <p>Horsepower: {carSpecs.horsepower}</p>
            <p>Torque: {carSpecs.torque}</p>
            <p>Transmission: {carSpecs.transmission}</p>
            <p>Drivetrain: {carSpecs.drivetrain}</p>
            <p>Fuel Economy: {carSpecs.fuelEconomy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
