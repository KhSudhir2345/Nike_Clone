import React, { useState } from 'react';
import './ToggleSwitch.css'; // Assuming your CSS is in a file named ToggleSwitch.css

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle} style={{display:'flex',alignItems:'center',position:'relative',top:'13px',left:'20px'}}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
