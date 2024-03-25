import React from 'react';


const StrategyDeployment = () => {
     
  const carStrategyDeployment = {
    mission: "To provide safe and efficient transportation solutions",
    vision: "To become a leader in sustainable mobility",
    goals: [
      "Reduce carbon emissions by 50% by 2030",
      "Increase vehicle safety features by 30% within 2 years",
      "Expand electric vehicle fleet by 50% by 2025"
    ],
    initiatives: [
      "Implementing eco-friendly driving training for drivers",
      "Investing in electric vehicle charging infrastructure",
      "Collaborating with manufacturers to develop safer vehicle designs"
    ]
  };

  return (
    <div className="strategy-deployment-container">
      <h1 className="heading">Car Strategy Deployment</h1>
      <div className="strategy-details">
        <div className="strategy-section">
          <h2>Mission</h2>
          <p>{carStrategyDeployment.mission}</p>
        </div>
        <div className="strategy-section">
          <h2>Vision</h2>
          <p>{carStrategyDeployment.vision}</p>
        </div>
        <div className="strategy-section">
          <h2>Goals</h2>
          <ul>
            {carStrategyDeployment.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
        <div className="strategy-section">
          <h2>Initiatives</h2>
          <ul>
            {carStrategyDeployment.initiatives.map((initiative, index) => (
              <li key={index}>{initiative}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StrategyDeployment;
