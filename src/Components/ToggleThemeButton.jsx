import React, { useState } from 'react';
import { Button } from 'antd';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  const [buttonToggled, setButtonToggled] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setButtonToggled(!buttonToggled);
  };

  return (
    <div className={`toggle-theme-button ${buttonToggled ? 'toggle' : ''}`}>
      <Button onClick={handleClick}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
