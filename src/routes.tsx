import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignIn";
import Login from "./pages/Login";


function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default TheRoutes;
