import React from 'react';


const EmployeeTraining = () => {
 
  const trainingPrograms = [
    { name: "Leadership Development", duration: "3 months", status: "In Progress" },
    { name: "Technical Skills Training", duration: "6 weeks", status: "Completed" },
    { name: "Customer Service Workshop", duration: "2 days", status: "Planned" },
    { name: "Project Management Certification", duration: "6 months", status: "Pending" }
  ];

  return (
    <div className="employee-training-container">
      <h1 className="heading">Employee Training Programs</h1>
      <div className="training-details">
        {trainingPrograms.map((program, index) => (
          <div key={index} className="training-program">
            <h2>{program.name}</h2>
            <p><strong>Duration:</strong> {program.duration}</p>
            <p><strong>Status:</strong> {program.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTraining;
