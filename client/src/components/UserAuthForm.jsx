import InputBox from "./InputBox";
import { useRef } from "react";

import axios from "axios";
import { UserRound, AtSign, Lock } from "lucide-react";
import googleIcon from "../assets/images/google.png";
import { CommonAnimation } from "./index";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const UserAuthForm = ({ type }) => {
  const authForm = useRef();

  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_CLIENT_SERVER + serverRoute, formData)

      .then(({ data }) => {
        console.log("data:", data);
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let serverRoute = type === "sign-in" ? "/signin" : "/signup";
    // regex for email and password validations
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/;

    // form data
    let form = new FormData(authForm.current);

    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    // console.log("formData:", formData);

    // form validation
    let { fullname, email, password } = formData;

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("fullname must have least 3 letters ");
      }
    }

    if (!email.length) {
      return toast.error("enter a email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("email is invalid ");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "password should be in 6 to 18 characters and must have numeric, 1 lowercase, 1 uppercase and 1 special character "
      );
    }

    userAuthThroughServer(serverRoute, formData);
  };

  return (
    <CommonAnimation>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form className="w-[80%] max-w-[400px]" ref={authForm}>
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Welcome back" : "Join us today"}
          </h1>

          {type != "sign-in" ? (
            <InputBox
              name={"fullname"}
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

          <button
            className="btn-dark center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
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

// 2 59
