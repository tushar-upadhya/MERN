import { useState } from "react";

const Input = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box"
      />
      <i className={`fi ${icon} input-icon`}></i>

      {type === "password" ? (
        <i
          className={`left-auto cursor-pointer fi fi-rr-eye${
            !passwordVisible ? "-crossed" : ""
          } input-icon right-4`}
          onClick={() => setPasswordVisible((currentValue) => !currentValue)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
