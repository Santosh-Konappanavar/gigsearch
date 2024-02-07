import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dasboard from "./components/Dasboard";
import Error from "./components/Error";
import Mainpage from "./components/Mainpage";
import Intialogin from "./components/Intialogin";
import Loginwith from "./components/Loginwith";
import Success from "./components/Success";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dash" element={<Dasboard/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/main" element={<Login/>} />
        <Route path="/login" element={<Intialogin/>} />
        <Route path="/loginwith" element={<Loginwith/>} />
        <Route path="/success" element={<Success/>} />
      </Routes >
    </>
  );
};

export default App;
