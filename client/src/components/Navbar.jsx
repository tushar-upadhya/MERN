import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="flex-none w-10">
          <img src={logo} alt="logo" className="w-full" />
        </Link>

        <div
          className={
            "md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto  absolute py-4 px-[5vw] bg-white w-full left-0 top-full mt-0.5 border-b border-grey md:show " +
            (searchBoxVisibility ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="search"
            className="w-full md:w-auto bg-grey p-4 md:pl-12 pl-6 pr-[-12%] md:pr-6 rounded-full placeholder:text-dark-grey"
          />
          <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
        </div>

        <div className="flex items-center gap-3 ml-auto md:gap-6">
          <button
            className="flex items-center justify-center w-12 h-12 rounded-full md:hidden bg-grey"
            onClick={() =>
              setSearchBoxVisibility((currentValue) => !currentValue)
            }
          >
            <i className="text-xl fi fi-rr-search"></i>
          </button>

          <Link to={"/editor"} className="hidden gap-2 md:flex link">
            <i className="fi fi-rr-file-edit"></i>
            <p>Write</p>
          </Link>

          <Link className="py-2 btn-dark" to={"/signin"}>
            Sign In
          </Link>

          <Link className="hidden py-2 btn-light md:block" to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
