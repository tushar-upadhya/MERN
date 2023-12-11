import InputBox from "./InputBox";
import { UserRound, AtSign, Lock } from "lucide-react";

import googleIcon from "../assets/images/google.png";
import { CommonAnimation } from "./index";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
  return (
    <CommonAnimation>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Welcome back" : "Join us today"}
          </h1>

          {type != "sign-in" ? (
            <InputBox
              name={"fullName"}
              type={"text"}
              placeholder={"Full Name"}
              Icon={UserRound}
            />
          ) : (
            ""
          )}
          <InputBox
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            Icon={AtSign}
          />

          <InputBox
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            Icon={Lock}
          />

          <button className="btn-dark center mt-14" type="submit">
            {type.replace("_", "")}
          </button>

          <div className="relative flex w-full items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 center  border-black" />
            <p>Or</p>
            <hr className="w-1/2 center border-black" />
          </div>

          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="googleIcon" className="w-5" />
            Continue with google
          </button>

          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have a account?
              <Link
                to={"/signup"}
                className="underline text-black text-xl ml-1"
              >
                Join today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already have a account?
              <Link
                to={"/signin"}
                className="underline text-black text-xl ml-1"
              >
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </CommonAnimation>
  );
};

export default UserAuthForm;
