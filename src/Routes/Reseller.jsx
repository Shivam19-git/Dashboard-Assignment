import React from 'react';

const Reseller = () => {

  const carReseller = {
    name: "ABC Auto Sales",
    location: "123 Main Street, City, Country",
    contact: "123-456-7890",
    website: "www.abcautosales.com",
    inventory: [
      { make: "Toyota", model: "Camry", year: "2020", price: "$20,000" },
      { make: "Honda", model: "Accord", year: "2019", price: "$18,000" },
      { make: "Ford", model: "Fusion", year: "2018", price: "$16,000" }
    ]
  };

  return (
    <div className="reseller-container">
      <h1 className="heading">Car Reseller Information</h1>
      <div className="reseller-details">
        <div className="reseller-section">
          <h2>Reseller Details</h2>
          <div className="reseller-topic">
            <p>Name: {carReseller.name}</p>
            <p>Location: {carReseller.location}</p>
            <p>Contact: {carReseller.contact}</p>
            <p>Website: <a href={`http://${carReseller.website}`} target="_blank" rel="noopener noreferrer">{carReseller.website}</a></p>
          </div>
        </div>
        <div className="reseller-section">
          <h2>Inventory</h2>
          <div className="inventory-list">
            {carReseller.inventory.map((car, index) => (
              <div key={index} className="inventory-item">
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Price: {car.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reseller;
