import React from 'react';

const Home = () => {

  const products = [
    { id: 1, name: "Product A", category: "Category X" },
    { id: 2, name: "Product B", category: "Category Y" },
    { id: 3, name: "Product C", category: "Category Z" }
  ];

  const deadline = "March 31, 2024";

  const problemsFaced = [
    "Supply chain issues",
    "Technical difficulties",
    "Communication problems"
  ];

  return (
    <div className="on-render-container">
      <h1 className='home-page-heading'>Home Page</h1>
      <br/>
      <h1 className="heading">Project Details</h1>
      <div className="project-details-container">
        <div className="project-detail-item">
          <h2>Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name} - {product.category}</li>
            ))}
          </ul>
        </div>
        <div className="project-detail-item">
          <h2>Deadline</h2>
          <p>{deadline}</p>
        </div>
        <div className="project-detail-item">
          <h2>Problems Faced</h2>
          <ul>
            {problemsFaced.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
