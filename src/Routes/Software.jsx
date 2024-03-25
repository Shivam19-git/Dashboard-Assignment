import React from 'react';


const Software = () => {
  // Placeholder data
  const carSoftware = {
    gpsStatus: "Connected",
    softwareVersion: "v2.5",
    firmwareVersion: "v1.8",
    systemStatus: "Operational",
    diagnostics: "No issues found"
  };

  return (
    <div className="software-container">
      <h1 className="heading">Vehicle Software Overview</h1>
      <div className="software-details">
        <div className="software-section">
          <h2>GPS</h2>
          <p>Status: {carSoftware.gpsStatus}</p>
        </div>
        <div className="software-section">
          <h2>Software</h2>
          <p>Version: {carSoftware.softwareVersion}</p>
        </div>
        <div className="software-section">
          <h2>Firmware</h2>
          <p>Version: {carSoftware.firmwareVersion}</p>
        </div>
        <div className="software-section">
          <h2>System Status</h2>
          <p>{carSoftware.systemStatus}</p>
        </div>
        <div className="software-section">
          <h2>Diagnostics</h2>
          <p>{carSoftware.diagnostics}</p>
        </div>
      </div>
    </div>
  );
};

export default Software;
