import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignIn";
import Login from "./pages/Login";
import SecondLogin from "./pages/Login/second";
import Home from "./pages/Home";

import RouterProp from "./types/routerProp";

function ProtectedRoutes({ redirectTo }: RouterProp) {

  const isAuthenticated: boolean = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />

}

function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<SecondLogin />} />
      <Route path="/SignUp" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo={'/'} />}>
        <Route path="/Home" element={<Home />} />
      </Route>

    </Routes>
  );
}

export default TheRoutes;
