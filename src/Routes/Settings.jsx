import React from 'react';


const Settings = () => {
  
  const generalSettings = {
    language: "English",
    timeZone: "GMT+0",
    theme: "Light",
    notifications: "Enabled"
  };

  const accountSettings = {
    username: "example_user",
    email: "example@example.com",
    password: "********",
    securityQuestion: "What is your favorite color?",
    securityAnswer: "Blue"
  };

  const privacySettings = {
    visibility: "Public",
    dataCollection: "Enabled",
    cookies: "Enabled",
    tracking: "Enabled"
  };

  return (
    <div className="settings-container">
      <h1 className="heading">Settings Overview</h1>
      <div className="settings-details">
        <div className="settings-section">
          <h2>General Settings</h2>
          <div className="settings-topic">
            <p>Language: {generalSettings.language}</p>
            <p>Time Zone: {generalSettings.timeZone}</p>
            <p>Theme: {generalSettings.theme}</p>
            <p>Notifications: {generalSettings.notifications}</p>
          </div>
        </div>
        <div className="settings-section">
          <h2>Account Settings</h2>
          <div className="settings-topic">
            <p>Username: {accountSettings.username}</p>
            <p>Email: {accountSettings.email}</p>
            <p>Password: {accountSettings.password}</p>
            <p>Security Question: {accountSettings.securityQuestion}</p>
            <p>Security Answer: {accountSettings.securityAnswer}</p>
          </div>
        </div>
        <div className="settings-section">
          <h2>Privacy Settings</h2>
          <div className="settings-topic">
            <p>Visibility: {privacySettings.visibility}</p>
            <p>Data Collection: {privacySettings.dataCollection}</p>
            <p>Cookies: {privacySettings.cookies}</p>
            <p>Tracking: {privacySettings.tracking}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
