import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { Search, PencilLine } from "lucide-react";
import CommonButton from "./common/CommonButton";

const Navbar = () => {
  const [searchBoxVisibility, SetSearchBoxVisibility] = useState(false);

  return (
    <>
      <nav className="z-10 sticky top-0 flex items-center gap-12 w-full px-[5vw] py-5 h-[80px] border-b border-grey bg-white">
        <Link to={"/"} className="flex-none w-10">
          <img src={logo} alt="logo" className="w-full" />
        </Link>

        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:show md:p-0 md:w-auto  " +
            (searchBoxVisibility ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="search"
            className="w-full md:w-auto bg-gray-200 p-4 pl-6 pr-[-12p%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
          />

          <Search className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey" />
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <CommonButton
            onClick={() =>
              SetSearchBoxVisibility((currentValue) => !currentValue)
            }
            className="md:hidden bg-grey"
          >
            <Search className="text-xl" />
          </CommonButton>

          <Link to={"/editor"} className="hidden md:flex gap-2 link">
            <PencilLine />
            <p>Write</p>
          </Link>

          <CommonButton to="/signin" className="btn-dark">
            Sign In
          </CommonButton>

          <CommonButton to="/signup" className="btn-light hidden md:block">
            Sign Up
          </CommonButton>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;