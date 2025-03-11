import React, { useEffect, useRef } from 'react';

// Function to calculate start (lighter) color
const lightenColor = (color: string, percent: number): string => {
  let r: number, g: number, b: number;
  const rgb = color.match(/^rgba?\((\d+), (\d+), (\d+)(?:, (\d+\.?\d*))?\)$/);

  if (rgb) {
    r = parseInt(rgb[1]);
    g = parseInt(rgb[2]);
    b = parseInt(rgb[3]);
  } else {
    return color; // If the color isn't in the expected format, return color
  }

  r = Math.min(255, Math.floor(r + (255 - r) * percent));
  g = Math.min(255, Math.floor(g + (255 - g) * percent));
  b = Math.min(255, Math.floor(b + (255 - b) * percent));

  return `rgb(${r}, ${g}, ${b})`;
};

interface RadialGaugeProps {
  value: number;
  maxValue: number;
  text?: string;
  backgroundColorWidth?: number;
  lineWidth?: number;
  gaugeColor?: string;
  canvasSize?: number;
}

const RadialGauge: React.FC<RadialGaugeProps> = ({
  value,
  maxValue,
  text = '',
  backgroundColorWidth = 20,
  lineWidth = 20,
  gaugeColor = 'rgba(62, 152, 199, 1)',
  canvasSize = 300,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Ensure canvasSize is at least 50 if it's too small or zero
  const validCanvasSize = Math.max(canvasSize, 15);

  // Update the gauge when props change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Dynamically set the canvas size when canvasSize prop changes
      canvas.width = validCanvasSize;
      canvas.height = validCanvasSize;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius =
          Math.min(centerX, centerY) -
          Math.min(backgroundColorWidth / 2, Math.min(centerX, centerY) / 2);

        const startAngle = Math.PI * 1.5;
        const lightColor = lightenColor(gaugeColor, 0.5);

        const drawGauge = (newValue: number) => {
          const endAngle = startAngle + (newValue / maxValue) * 2 * Math.PI;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Background of the gauge
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.lineWidth = backgroundColorWidth;
          ctx.strokeStyle = '#d6d6d6';
          ctx.stroke();

          // Create a gradient for the gauge color
          const gradient = ctx.createConicGradient(startAngle, centerX, centerY);
          gradient.addColorStop(0, lightColor);
          gradient.addColorStop(1, gaugeColor);

          // Gauge color with gradient
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, startAngle, endAngle);
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = gradient;
          ctx.stroke();

          // Text inside the gauge
          ctx.font = '14px Nunito Sans';
          ctx.fillStyle = '#000';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, centerX, centerY);
        };

        // Directly draw the gauge with the current value
        drawGauge(value);
      }
    }
  }, [value, maxValue, text, backgroundColorWidth, lineWidth, gaugeColor, validCanvasSize]);

  return <canvas ref={canvasRef} />;
};

export default RadialGauge;
