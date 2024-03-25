import React from 'react';


const PRD = () => {
 
  const carPRD = {
    safetyFeatures: ["ABS", "Airbags", "Traction Control"],
    entertainmentSystem: "Touchscreen Infotainment System",
    fuelEfficiency: "30 mpg",
    seatingCapacity: "5 passengers",
    cargoSpace: "20 cubic feet",
    warranty: "3 years / 36,000 miles"
  };

  return (
    <div className="prd-container">
      <h1 className="heading">Car Product Requirements</h1>
      <div className="prd-details">
        <div className="prd-section">
          <h2>Safety Features</h2>
          <ul>
            {carPRD.safetyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="prd-section">
          <h2>Entertainment System</h2>
          <p>{carPRD.entertainmentSystem}</p>
        </div>
        <div className="prd-section">
          <h2>Fuel Efficiency</h2>
          <p>{carPRD.fuelEfficiency}</p>
        </div>
        <div className="prd-section">
          <h2>Seating Capacity</h2>
          <p>{carPRD.seatingCapacity}</p>
        </div>
        <div className="prd-section">
          <h2>Cargo Space</h2>
          <p>{carPRD.cargoSpace}</p>
        </div>
        <div className="prd-section">
          <h2>Warranty</h2>
          <p>{carPRD.warranty}</p>
        </div>
      </div>
    </div>
  );
};

export default PRD;
