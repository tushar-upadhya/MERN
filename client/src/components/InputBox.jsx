import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

const InputBox = ({ name, type, Icon, id, value, placeholder }) => {
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

      <Icon className="input-icon left-2" />

      {type === "password" ? (
        passwordVisible ? (
          <Eye
            onClick={() => setPasswordVisible((currentValue) => !currentValue)}
            className="input-icon left-[auto] right-4 cursor-pointer"
          />
        ) : (
          <EyeOff
            onClick={() => setPasswordVisible((currentValue) => !currentValue)}
            className="input-icon left-[auto] right-4 cursor-pointer"
          />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
