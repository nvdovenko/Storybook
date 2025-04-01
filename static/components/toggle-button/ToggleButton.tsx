import React, { useState, useEffect } from 'react';
import './toggle-button.css';

interface ToggleButtonProps {
  onLabel?: string;
  offLabel?: string;
  initialState?: boolean;
  size?: 'small' | 'medium' | 'large';
  onToggle?: (state: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onLabel = 'On',
  offLabel = 'Off',
  initialState = true,
  size = 'medium',
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  useEffect(() => {
    setIsOn(initialState);
  }, [initialState]); // Update state when initialState changes

  const handleToggle = () => {
    setIsOn((prev) => {
      const newState = !prev;
      onToggle?.(newState);
      return newState;
    });
  };

  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${isOn ? 'toggle-button--on' : 'toggle-button--off'} toggle-button--${size}`}
        onClick={handleToggle}
      >
        {onLabel}
      </button>
      <button
        className={`toggle-button ${!isOn ? 'toggle-button--on' : 'toggle-button--off'} toggle-button--${size}`}
        onClick={handleToggle}
      >
        {offLabel}
      </button>
    </div>
  );
};

export default ToggleButton;
