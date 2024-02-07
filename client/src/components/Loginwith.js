import React from 'react';
import { useNavigate } from "react-router-dom";
import "./all.css";

function Loginwith() {

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/main");
  };
  return (
    <>
      <div className="intiallogin">
        <div className="loginimg">
          <img src="./Group 2 (1).svg" alt="#" />
        </div>
        <div className="loginpara">
          <h2>Explore the app</h2>
          <p>Now your finances are in one place and always under control</p>
        </div>
        <div className="logineithbtns">
          <img src='./Button with icon (2).png' alt='#'/>
          <img src='./Button with icon.png' alt='#' />
          <img src='./Button with icon (1).png' alt='#' onClick={handleSignIn} />
        </div>
      </div>
    </>
  )
}

export default Loginwith