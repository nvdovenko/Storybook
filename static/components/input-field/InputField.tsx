import React from 'react';
import icons from '../../../utils/iconImport';
import './input-field.css';

interface InputFieldProps {
  label?: string;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  type?: 'text' | 'date';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  iconName,
  iconPosition = 'left',
  placeholder,
  type = 'text',
  value,
  onChange,
}) => {
  const iconSrc = iconName ? icons[iconName] : null;

  return (
    <div className="input-field-container">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {iconSrc && iconPosition === 'left' && (
          <img src={iconSrc} alt={iconName} className="input-icon input-icon-left" />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-field ${iconSrc && iconPosition === 'left' ? 'icon-left' : ''} ${
            iconSrc && iconPosition === 'right' ? 'icon-right' : ''
          }`}
        />
        {iconSrc && iconPosition === 'right' && (
          <img src={iconSrc} alt={iconName} className="input-icon input-icon-right" />
        )}
      </div>
    </div>
  );
};

export default InputField;
