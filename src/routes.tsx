import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";

import fileContext from "./context/fileContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SecondLogin from "./pages/Login/second";
import Home from "./pages/Home";

import RouterProp from "./types/routerProp";

function ProtectedRoutes({ redirectTo }: RouterProp) {

  const isAuthenticated: boolean = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />

}

function TheRoutes() {

  const [errorState, setErrorState] = useState<boolean>(false);
  const [errorContent, setErrorContent] = useState<string>('');

  const [successState, setSuccessState] = useState<boolean>(false);

  return (
    <fileContext.Provider value={
      { errorState, setErrorState, errorContent, setErrorContent, successState, setSuccessState }
    }>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<SecondLogin />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route element={<ProtectedRoutes redirectTo={'/'} />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>

    </fileContext.Provider>
  );
}

export default TheRoutes;
