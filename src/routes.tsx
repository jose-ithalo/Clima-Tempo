import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import fileContext from "./context/fileContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SecondLogin from "./pages/Login/second";
import Forget from "./pages/Forget";
import Home from "./pages/Home";

import RouterProp from "./types/routerProp";
import Weather from "./types/weather";

function ProtectedRoutes({ redirectTo }: RouterProp) {

  const isAuthenticated: string | null = localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />

}

function TheRoutes() {

  const navigate = useNavigate();

  const [errorDelete, setErrorDelete] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<boolean>(false);
  const [errorContent, setErrorContent] = useState<string>('');

  const [successState, setSuccessState] = useState<boolean>(false);

  const [detachState, setDetachState] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);

  const [chosenCity, setChosenCity] = useState<string>('');
  const [deletedCity, setDeletedCity] = useState<string>('');

  const [weatherData, setWeatherData] = useState<Weather>({
    city: '',
    code: '',
    temp: 0,
    humidity: 0
  });

  return (
    <fileContext.Provider value={
      {
        errorState, setErrorState, errorContent, setErrorContent, successState, setSuccessState,
        modalState, setModalState, weatherData, setWeatherData, errorDelete, setErrorDelete,
        detachState, setDetachState, chosenCity, setChosenCity, deletedCity, setDeletedCity, navigate
      }
    }>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<SecondLogin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forget" element={<Forget />} />

        <Route element={<ProtectedRoutes redirectTo={'/'} />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>

    </fileContext.Provider>
  );
}

export default TheRoutes;
