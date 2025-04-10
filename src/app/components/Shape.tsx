import React from "react";

interface ShapeProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  className?: string;
}

const Shape: React.FC<ShapeProps> = ({
  width = 100,
  height = 100,
  borderRadius = 16,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-200 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      }}
    />
  );
};

export default Shape;


