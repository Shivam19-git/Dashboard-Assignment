import React from 'react';

const ExternalB2BInterview = () => {
 
  const products = ["Product A", "Product B", "Product C"];
  const deadline = "March 31, 2024";
  const problemsFaced = [
    "Integration issues with existing systems",
    "Resource constraints",
    "Vendor communication challenges"
  ];

  return (
    <div className="external-b2b-interview-container">
      <h1 className="heading">Interview Summary</h1>
      <div className="interview-details">
        <div className="interview-topic">
          <h2>Products</h2>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div className="interview-topic">
          <h2>Deadline</h2>
          <p>{deadline}</p>
        </div>
        <div className="interview-topic">
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

export default ExternalB2BInterview;
