import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignIn";
import Login from "./pages/Login";
import SecondLogin from "./pages/Login/second";


function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<SecondLogin />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default TheRoutes;
