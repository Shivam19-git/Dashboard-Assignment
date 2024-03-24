import React from 'react';
import { Button } from 'antd';

const Heading = () => {
  return (
    <div className="heading">
      <h1>Lizmotors <span className='logo-span'>Mobility</span></h1>
      <div className="user-controls">
      <Button type="primary" className="signup-button">Sign Up</Button>
      <Button type="default" className="signin-button">Sign In</Button>
      </div>
     
    </div>
  );
};

export default Heading;