import { Route, Routes } from "react-router-dom";
import { Navbar, UserAuthFormPage } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signin" element={<UserAuthFormPage type={"sign-in"} />} />
        <Route path="signup" element={<UserAuthFormPage type={"sign-up"} />} />
      </Route>
    </Routes>
  );
};

export default App;
