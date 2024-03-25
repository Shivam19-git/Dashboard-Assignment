import React from 'react';


const Hardware = () => {
  
  const carHardware = {
    engine: "V6",
    transmission: "Automatic",
    brakes: "Disc brakes",
    suspension: "Independent",
    tires: "All-season",
    wheels: "Alloy",
    headlights: "LED",
    infotainmentSystem: "Touchscreen display",
    safetyFeatures: ["ABS", "Airbags", "Collision warning"]
  };

  return (
    <div className="hardware-container">
      <h1 className="heading">Vehicle Hardware Overview</h1>
      <div className="hardware-details">
        <div className="hardware-section">
          <h2>Engine</h2>
          <p>{carHardware.engine}</p>
        </div>
        <div className="hardware-section">
          <h2>Transmission</h2>
          <p>{carHardware.transmission}</p>
        </div>
        <div className="hardware-section">
          <h2>Brakes</h2>
          <p>{carHardware.brakes}</p>
        </div>
        <div className="hardware-section">
          <h2>Suspension</h2>
          <p>{carHardware.suspension}</p>
        </div>
        <div className="hardware-section">
          <h2>Tires</h2>
          <p>{carHardware.tires}</p>
        </div>
        <div className="hardware-section">
          <h2>Wheels</h2>
          <p>{carHardware.wheels}</p>
        </div>
        <div className="hardware-section">
          <h2>Headlights</h2>
          <p>{carHardware.headlights}</p>
        </div>
        <div className="hardware-section">
          <h2>Infotainment System</h2>
          <p>{carHardware.infotainmentSystem}</p>
        </div>
        <div className="hardware-section">
          <h2>Safety Features</h2>
          <ul>
            {carHardware.safetyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
