import React from 'react';


const ExternalB2BOnline = () => {
  
  const totalReviews = 150;
  const positiveReviews = 120;
  const negativeReviews = 30;
  const comments = [
    "Great product, highly recommended!",
    "The service was excellent.",
    "Could be better, not satisfied with the quality.",
    "Very poor customer support.",
    "Average experience, nothing special.",
    "Will not purchase again.",
    "Awesome!",
    "Terrible experience, never again."
  ];

  return (
    <div className="external-b2b-container">
      <h1 className="heading">Feedback Overview</h1>
      <div className="overview-container">
        <div className="overview-item">
          <h2>Total Reviews</h2>
          <p>{totalReviews}</p>
        </div>
        <div className="overview-item">
          <h2>Positive Reviews</h2>
          <p>{positiveReviews}</p>
        </div>
        <div className="overview-item">
          <h2>Negative Reviews</h2>
          <p>{negativeReviews}</p>
        </div>
        <div className="overview-item">
          <h2>Comments</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExternalB2BOnline;
