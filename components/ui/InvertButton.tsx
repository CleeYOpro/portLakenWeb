import React from 'react';

interface InvertButtonProps {
  text: string;
  icon?: React.ReactNode;

  // fully flexible styling
  size?: string;        // e.g. "text-sm", "text-base", "text-lg"
  padding?: string;     // e.g. "px-4 py-2"
  curvature?: string;   // e.g. "rounded-lg", "rounded-full"

  // NEW: Configuration for the "Dark" state
  textColor?: string;   // Start text color (light-to-dark) or End text color (dark-to-light)
  bgColor?: string;     // End background color (light-to-dark) or Start background color (dark-to-light)
  borderColor?: string; // Border color matches textColor typically

  // NEW: Configuration for the "Light" state
  lightStateBg?: string; // defaults to 'bg-white'
  darkStateText?: string; // defaults to 'text-white'

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

  lightStateBg = 'bg-white',
  darkStateText = 'text-white',

  invertOnHover = true,
  invertDirection = 'light-to-dark',

  className = '',
  onClick,
}) => {
  const base =
    `inline-flex items-center justify-center font-medium cursor-pointer
   transition-all duration-300 ease-in-out
   border-4 ${size} ${padding} ${curvature}`;


  // Light to Dark: Starts [lightBg, textColor], Hovers [bgColor, darkStateText]
  const lightToDark = `
    ${lightStateBg} ${textColor} ${borderColor}
    hover:${bgColor}
    hover:${darkStateText}
    hover:border-transparent
  `;

  // Dark to Light: Starts [bgColor, darkStateText], Hovers [lightBg, textColor]
  const darkToLight = `
    ${bgColor} ${darkStateText} ${borderColor}
    hover:${lightStateBg}
    hover:${textColor}
    hover:border-transparent
  `;

  const invertClasses = invertOnHover
    ? invertDirection === 'light-to-dark'
      ? lightToDark
      : darkToLight
    : `${bgColor} ${darkStateText} border-transparent`;

  return (
    <button
      onClick={onClick}
      className={`${base} ${invertClasses} ${className}`}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default InvertButton;
