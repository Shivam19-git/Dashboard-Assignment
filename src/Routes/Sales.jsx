import React from 'react';


const Sales = () => {
  // Placeholder data
  const carSales = {
    totalSales: 150,
    topSellingModel: "Toyota Camry",
    averagePrice: "$30,000",
    monthlySales: [
      { month: "January", sales: 20 },
      { month: "February", sales: 15 },
      { month: "March", sales: 25 },
      { month: "April", sales: 18 },
      { month: "May", sales: 22 },
      { month: "June", sales: 25 },
      { month: "July", sales: 30 },
      { month: "August", sales: 28 },
      { month: "September", sales: 27 },
      { month: "October", sales: 20 },
      { month: "November", sales: 18 },
      { month: "December", sales: 22 }
    ]
  };

  return (
    <div className="sales-container">
      <h1 className="heading">Car Sales Overview</h1>
      <div className="sales-details">
        <div className="sales-section">
          <h2>Total Sales</h2>
          <p>{carSales.totalSales}</p>
        </div>
        <div className="sales-section">
          <h2>Top Selling Model</h2>
          <p>{carSales.topSellingModel}</p>
        </div>
        <div className="sales-section">
          <h2>Average Price</h2>
          <p>{carSales.averagePrice}</p>
        </div>
        <div className="sales-section">
          <h2>Monthly Sales</h2>
          <ul>
            {carSales.monthlySales.map((monthSale, index) => (
              <li key={index}>{monthSale.month}: {monthSale.sales}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sales;
