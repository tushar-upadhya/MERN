import { Link } from "react-router-dom";

const CommonButton = ({ to, onClick, className, children }) => {
  const props = {
    className: `py-2 ${className}`,
  };

  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  } else if (onClick) {
    return (
      <button onClick={onClick} {...props}>
        {children}
      </button>
    );
  }

  return null;
};

export default CommonButton;
