import React from 'react';


const SupplyChain = () => {
  // Placeholder data
  const supplyChainData = {
    suppliers: [
      "Supplier A",
      "Supplier B",
      "Supplier C"
    ],
    parts: [
      { name: "Engine", quantity: 500 },
      { name: "Tires", quantity: 1000 },
      { name: "Seats", quantity: 800 }
    ],
    productionCapacity: "1500 units per day",
    distributionCenters: [
      "Center X",
      "Center Y",
      "Center Z"
    ],
    deliveryRoutes: [
      "Route 1",
      "Route 2",
      "Route 3"
    ]
  };

  return (
    <div className="supply-chain-container">
      <h1 className="heading">Supply Chain Overview</h1>
      <div className="supply-chain-details">
        <div className="supply-chain-section">
          <h2>Suppliers</h2>
          <ul>
            {supplyChainData.suppliers.map((supplier, index) => (
              <li key={index}>{supplier}</li>
            ))}
          </ul>
        </div>
        <div className="supply-chain-section">
          <h2>Parts</h2>
          <ul>
            {supplyChainData.parts.map((part, index) => (
              <li key={index}>{part.name}: {part.quantity}</li>
            ))}
          </ul>
        </div>
        <div className="supply-chain-section">
          <h2>Production Capacity</h2>
          <p>{supplyChainData.productionCapacity}</p>
        </div>
        <div className="supply-chain-section">
          <h2>Distribution Centers</h2>
          <ul>
            {supplyChainData.distributionCenters.map((center, index) => (
              <li key={index}>{center}</li>
            ))}
          </ul>
        </div>
        <div className="supply-chain-section">
          <h2>Delivery Routes</h2>
          <ul>
            {supplyChainData.deliveryRoutes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
