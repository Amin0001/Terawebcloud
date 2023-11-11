import React, { useState } from 'react';
import Switch from 'react-switch';

const ToggleButton = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleBillingPeriod = () => {
    setIsMonthly(!isMonthly);
    onToggle(isMonthly);
  };

  return (
    <div className="text-center">
      <label>
        <span className="mr-2">Monthly</span>
        <Switch
          onChange={toggleBillingPeriod}
          checked={isMonthly}
          onColor="#2563EB"
          offColor="#D1D5DB"
          handleDiameter={28}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span className="ml-2">Yearly</span>
      </label>
    </div>
  );
};

export default ToggleButton;
