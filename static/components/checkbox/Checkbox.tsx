import React, { useState } from 'react';
import './checkbox.css';

interface Option {
  value: string;
  checked: boolean;
}

interface CheckboxProps {
  options: Option[];
  size?: 'small' | 'medium' | 'large';
}

const Checkbox: React.FC<CheckboxProps> = ({ options, size = 'medium' }) => {
  const [selectedOptions, setSelectedOptions] = useState(options);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) => (option.value === value ? { ...option, checked } : option)),
    );
  };

  // Set size class based on the size prop
  const sizeClass =
    size === 'small' ? 'checkbox-small' : size === 'large' ? 'checkbox-large' : 'checkbox-medium';

  return (
    <div>
      {selectedOptions.map(({ value, checked }) => (
        <label key={value} className={`checkbox-container ${sizeClass}`}>
          <input
            type="checkbox"
            value={value}
            checked={checked}
            onChange={(e) => handleCheckboxChange(value, e.target.checked)}
          />
          <span className="checkbox-label">{value}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
