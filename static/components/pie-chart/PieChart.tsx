import React, { useEffect, useRef } from 'react';

interface PieChartProps {
  data: number[];
  labels?: string[];
  colors: string[];
  showPointerLines?: boolean;
  maxWidth?: number;
  showPercentages?: boolean;
  gapSize?: number; // Gap size in degrees between slices
  border?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  labels = [],
  colors,
  showPointerLines = false,
  maxWidth = 80,
  showPercentages = false,
  gapSize = 0,
  border = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const total = data.reduce((sum, value) => sum + value, 0); // Calculate total sum of data
        let startAngle = 0;
        const gapRad = (gapSize * Math.PI) / 180; // Convert gap size to radians

        // Clean canvas before re-render
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        data.forEach((value, index) => {
          const sliceAngle = (value / total) * 2 * Math.PI - gapRad; // Calculate the angle for the slice

          ctx.beginPath();
          ctx.moveTo(200, 200); // Move to the center of the circle
          ctx.arc(200, 200, 100, startAngle, startAngle + sliceAngle); // Draw the pie slice
          ctx.fillStyle = colors[index % colors.length]; // Assign color to the slice
          ctx.fill(); // Fill the slice with color

          if (border) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 0.5;
            ctx.stroke(); // Outline the slice
          }

          const textAngle = startAngle + sliceAngle / 2;

          // Draw percentage inside the slice if enabled
          if (showPercentages) {
            const percent = ((value / total) * 100).toFixed(1) + '%'; // Format percentage
            const percentX = 200 + Math.cos(textAngle) * 60; // Position inside the slice
            const percentY = 200 + Math.sin(textAngle) * 60;

            ctx.fillStyle = '#000'; // White text for contrast
            ctx.font = '10px Nunito Sans';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(percent, percentX, percentY);
          }

          // Draw labels if provided
          if (labels.length > 0 && labels[index]) {
            const textAngle = startAngle + sliceAngle / 2;
            const label = labels[index];

            // Dynamic radius: short labels are closer, long labels are farther
            const minRadius = 110;
            const maxRadius = 140;
            const textRadius = minRadius + Math.min(label.length * 2, maxRadius - minRadius);

            const textX = 200 + Math.cos(textAngle) * textRadius; // Position outside the slice
            const textY = 200 + Math.sin(textAngle) * textRadius;

            ctx.fillStyle = '#000'; // Black text color
            ctx.font = '14px Nunito Sans';
            ctx.textAlign = textX > 200 ? 'left' : 'right';
            ctx.textBaseline = 'middle';

            // Draw a pointer line if enabled
            if (showPointerLines) {
              const midX = 200 + Math.cos(textAngle) * 100; // Connection point
              const midY = 200 + Math.sin(textAngle) * 100;

              const lineLengthFactor = 0.8; // make line 20% shorter

              // Calculate the direction vector from the point (midX, midY) to the point (textX, textY)
              const dx = textX - midX;
              const dy = textY - midY;

              // Calculate the new endpoint by shifting it by a certain percentage
              const newTextX = midX + dx * lineLengthFactor;
              const newTextY = midY + dy * lineLengthFactor;

              ctx.beginPath();
              ctx.moveTo(midX, midY);
              ctx.lineTo(newTextX, newTextY);
              ctx.strokeStyle = '#000';
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }

            // Wrap text if it's too long
            const lineHeight = 16; // Line spacing
            const words = label.split(' '); // Split label into words
            let line = '';
            const lines: string[] = [];

            words.forEach((word) => {
              const testLine = line ? `${line} ${word}` : word;
              const textWidth = ctx.measureText(testLine).width;
              if (textWidth > maxWidth) {
                lines.push(line);
                line = word;
              } else {
                line = testLine;
              }
            });

            if (line) lines.push(line); // Add the last line

            // Draw each line separately
            lines.forEach((line, i) => {
              ctx.fillText(
                line,
                textX,
                textY + i * lineHeight - (lines.length - 1) * (lineHeight / 2),
              );
            });
          }

          startAngle += sliceAngle + gapRad; // Update start angle for the next slice
        });
      }
    }
  }, [data, labels, colors, showPointerLines, gapSize]);

  return <canvas ref={canvasRef} width={400} height={400} />; // Render the canvas element
};

export default PieChart;
