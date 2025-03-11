import React, { useState } from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import icons from '../utils/iconImport.ts';
import './styles/iconItems.css';

// eslint-disable-next-line react/prop-types
const Tooltip = ({ text }) => <div className="tooltip">{text}</div>;

const IconItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [copiedIcon, setCopiedIcon] = useState(null);

  const copyToClipboard = (iconClass) => {
    navigator.clipboard.writeText(iconClass);
    setCopiedIcon(iconClass);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
    setCopiedIcon(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchInput"
      />

      <IconGallery>
        {Object.keys(icons)
          .filter((iconName) => iconName.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((iconName) => (
            <div
              key={iconName}
              className="iconContainer"
              onClick={() => copyToClipboard(iconName)}
              onMouseEnter={() => setHoveredIcon(iconName)}
              onMouseLeave={handleMouseLeave}
            >
              <IconItem name={iconName}>
                <img src={icons[iconName]} alt={iconName} className="iconImage" />

                {hoveredIcon === iconName && copiedIcon !== iconName && (
                  <Tooltip text="Click to copy name" />
                )}

                {copiedIcon === iconName && <Tooltip text="Copied!" />}
              </IconItem>
            </div>
          ))}
      </IconGallery>
    </div>
  );
};

export default IconItems;
