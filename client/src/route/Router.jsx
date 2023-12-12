import { Route, Routes } from "react-router-dom";

import { Navbar, UserAuthForm } from "../components/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signin" element={<UserAuthForm type={"sign-in"} />} />

        <Route path="signup" element={<UserAuthForm type={"sign-up"} />} />
      </Route>
    </Routes>
  );
};

export default Router;
