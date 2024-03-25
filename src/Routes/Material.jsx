import React from 'react';


const Material = () => {
  // Placeholder data
  const carMaterials = {
    body: "Aluminum",
    interior: {
      seats: "Leather",
      dashboard: "Plastic",
      steeringWheel: "Leather",
      doorPanels: "Plastic"
    },
    exterior: {
      paint: "Black",
      windows: "Glass",
      tires: "Rubber"
    }
  };

  return (
    <div className="material-container">
      <h1 className="heading">Car Material Overview</h1>
      <div className="material-details">
        <div className="material-section">
          <h2>Body</h2>
          <p>{carMaterials.body}</p>
        </div>
        <div className="material-section">
          <h2>Interior</h2>
          <div className="material-topic">
            <p>Seats: {carMaterials.interior.seats}</p>
            <p>Dashboard: {carMaterials.interior.dashboard}</p>
            <p>Steering Wheel: {carMaterials.interior.steeringWheel}</p>
            <p>Door Panels: {carMaterials.interior.doorPanels}</p>
          </div>
        </div>
        <div className="material-section">
          <h2>Exterior</h2>
          <div className="material-topic">
            <p>Paint: {carMaterials.exterior.paint}</p>
            <p>Windows: {carMaterials.exterior.windows}</p>
            <p>Tires: {carMaterials.exterior.tires}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
