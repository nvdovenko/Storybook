import React, { useState } from "react";
import "./styles/colorItem.css";

const Tooltip = ({ text, position }) => (
    <div className={`tooltip tooltip-${position}`}>{text}</div>
);

interface ColorItemProps {
    title: string;
    subtitle: string;
    colors: { [key: string]: string };
}

const ColorItem: React.FC<ColorItemProps> = ({ title, subtitle, colors }) => {
    const [copiedColor, setCopiedColor] = useState(null);
    const [copiedSubtitle, setCopiedSubtitle] = useState(null);
    const [hoveredColor, setHoveredColor] = useState<string | null>(null);
    const [hoveredSubtitle, setHoveredSubtitle] = useState<string | null>(null);

    const copyToClipboard = (value, type) => {
        navigator.clipboard.writeText(value);
        if (type === "color") {
            setCopiedColor(value);
        } else if (type === "subtitle") {
            setCopiedSubtitle(value);
        }
    };

    const handleMouseLeave = () => {
        setHoveredColor(null);
        setHoveredSubtitle(null);
        setCopiedColor(null);
        setCopiedSubtitle(null);
    };

    return (
        <div className="color-item">
            <div className="color-item-header" onMouseLeave={handleMouseLeave}>
                <h3>{title}</h3>
                <div
                    className="subtitle"
                    onClick={() => copyToClipboard(subtitle, "subtitle")}
                    onMouseEnter={() => setHoveredSubtitle(subtitle)}
                >
                    {subtitle}
                    {hoveredSubtitle === subtitle && copiedSubtitle !== subtitle && (
                        <Tooltip text="Click to copy variable name" position="subtitle" />
                    )}
                    {copiedSubtitle === subtitle && (
                        <Tooltip text="Variable name copied!" position="subtitle" />
                    )}
                </div>
            </div>

            <div className="color-swatches">
                {Object.entries(colors).map(([colorName, colorValue]) => (
                    <div
                        key={colorName}
                        className="color-swatch"
                        style={{ backgroundColor: colorValue }}
                        onClick={() => copyToClipboard(colorValue, "color")}
                        onMouseEnter={() => setHoveredColor(colorValue)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="color-value">{colorValue}</span>
                        <h4 className="color-name">{colorName}</h4>
                        {hoveredColor === colorValue && copiedColor !== colorValue && (
                            <Tooltip text="Click to copy color" position="color" />
                        )}
                        {copiedColor === colorValue && (
                            <Tooltip text="Color copied!" position="color" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorItem;

