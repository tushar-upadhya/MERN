import { AnimationWrapper, Input } from "../components";
import googleIcon from "../assets/images/google.png";
import { Link } from "react-router-dom";

const UserAuthFormPage = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="flex items-center justify-center h-cover">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="mb-24 text-4xl text-center capitalize font-gelasio">
            {type === "sign-in" ? "Welcome back" : "Join us today"}
          </h1>

          {type !== "sign-in" ? (
            <Input
              name={"fullname"}
              type={"text"}
              placeholder={"Full Name"}
              icon={"fi-rr-user"}
            />
          ) : (
            ""
          )}

          <Input
            name={"fullname"}
            type={"email"}
            placeholder={"Email"}
            icon={"fi-rr-envelope"}
          />

          <Input
            name={"fullname"}
            type={"password"}
            placeholder={"Password"}
            icon={"fi-rr-key"}
          />

          <button type="submit" className="btn-dark center mt-14">
            {type.replace("-", " ")}
          </button>

          <div className="relative flex items-center w-full gap-2 my-10 font-bold text-black uppercase opacity-10">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="flex items-center justify-center btn-dark gap-4 center w-[90%]">
            <img src={googleIcon} alt="googleIcon" className="w-5" />
            Continue with people
          </button>

          {type === "sign-in" ? (
            <p className="mt-6 text-xl text-center text-dark-grey">
              Don't have an account
              <Link
                to={"/signup"}
                className="ml-1 text-xl text-black underline"
              >
                Join us
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-xl text-center text-dark-grey">
              Already have an account?
              <Link
                to={"/signin"}
                className="ml-1 text-xl text-black underline"
              >
                SignIn here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthFormPage;
