import React, { useState, useEffect, useRef } from 'react';
import './dropdown-menu.css';

interface Options {
  value: string;
  text: string;
}

interface DropdownMenuProps {
  label: string;
  options: { value: string; text: string }[];
  value: string;
  onChange: (option: { value: string; text: string }) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Options | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const selectedDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const selected = options.find((option) => option.value === value);
    if (selected) {
      setSelectedOption(selected);
    }
  }, [value, options]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option: Options) => {
    setSelectedOption(option);
    onChange(option);
    closeMenu();
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <div className="div-container" onClick={toggleMenu}>
        <div className="selected" ref={selectedDivRef}>
          {selectedOption ? selectedOption.text : 'Choose an option'}
        </div>
        <div className={`options ${isOpen ? 'open' : ''}`} ref={optionsRef}>
          {options.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={(e) => {
                e.stopPropagation();
                handleOptionSelect(option);
              }}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
