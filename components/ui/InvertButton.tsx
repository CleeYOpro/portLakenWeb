import React from 'react';

interface InvertButtonProps {
  text: string;
  icon?: React.ReactNode;

  // fully flexible styling
  size?: string;        // e.g. "text-sm", "text-base", "text-lg"
  padding?: string;     // e.g. "px-4 py-2"
  curvature?: string;   // e.g. "rounded-lg", "rounded-full"

  // color control (PASS FULL CLASSES)
  textColor?: string;   // e.g. "text-gray-800"
  bgColor?: string;     // e.g. "bg-gray-800"
  borderColor?: string; // e.g. "border-gray-800"

  invertOnHover?: boolean;
  invertDirection?: 'light-to-dark' | 'dark-to-light';

  className?: string;
  onClick?: () => void;
}

const InvertButton: React.FC<InvertButtonProps> = ({
  text,
  icon,

  size = 'text-base',
  padding = 'px-6 py-3',
  curvature = 'rounded-lg',

  textColor = 'text-gray-800',
  bgColor = 'bg-gray-800',
  borderColor = 'border-gray-800',

  invertOnHover = true,
  invertDirection = 'light-to-dark',

  className = '',
  onClick,
}) => {
  const base =
    `inline-flex items-center justify-center font-medium cursor-pointer
     transition-all duration-300 ease-in-out
     border ${size} ${padding} ${curvature}`;

  const lightToDark = `
    bg-white ${textColor} ${borderColor}
    hover:${bgColor}
    hover:text-white
    hover:border-transparent
  `;

  const darkToLight = `
    ${bgColor} text-white ${borderColor}
    hover:bg-white
    hover:${textColor}
    hover:border-transparent
  `;

  const invertClasses = invertOnHover
    ? invertDirection === 'light-to-dark'
      ? lightToDark
      : darkToLight
    : `${bgColor} text-white border-transparent`;

  return (
    <button
      onClick={onClick}
      className={`${base} ${invertClasses} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default InvertButton;
