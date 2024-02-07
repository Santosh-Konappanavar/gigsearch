import React from "react";
import { useNavigate } from "react-router-dom";
import "./all.css";

function Intialogin() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/loginwith");
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="intiallogin">
        <div className="loginimg">
          <img src="./Group 2 (1).svg" alt="#" />
        </div>
        <div className="loginpara">
          <h2>Explore the app</h2>
          <p>Now your finances are in one place and always under control</p>
        </div>
        <div className="loginbtns">
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={handleCreateAccount}>Create account</button>
        </div>
      </div>
    </>
  );
}

export default Intialogin;
