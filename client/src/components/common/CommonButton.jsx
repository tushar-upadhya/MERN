import React from "react";
import { Link } from "react-router-dom";

const CommonButton = ({ to, onClick, className, children }) => {
  const commonProps = {
    className: `py-2 ${className}`,
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  } else if (onClick) {
    return (
      <button onClick={onClick} {...commonProps}>
        {children}
      </button>
    );
  }

  return null;
};

export default CommonButton;
