import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import "./all.css"

function Mainpage() {

  const Splash = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

    return (isLoading ? (
      <PacmanLoader
        color={"#36D7B7"}
        isLoading={isLoading}
        size={150}
        className="splash"
      />
    ) : 
      <>
        <div className="main">
          <img src="./Group 2 (1).svg" alt="#" />
          <h1>Join Us!</h1>
          <p>
            To begin this journey, tell us what type of account you’d be opening.
          </p>
          <div>
            <NavLink to="/login" className="individual">
              <div>
                <img
                  className="background-image"
                  src="./Polygon 1.svg"
                  alt="Background"
                />
                <img className="overlay-image" src="./user.svg" alt="Overlay" />
              </div>
              <div className="inditext">
                <h4>Individual</h4>
                <p>Looking for Jobs</p>
              </div>
            </NavLink>

            <NavLink to="/login" className="individual">
              <div>
                <img
                  className="background-image"
                  src="./Polygon 2.svg"
                  alt="Background"
                />
                <img
                  className="overlay-image"
                  src="./briefcase.svg"
                  alt="Overlay"
                />
              </div>
              <div className="inditext">
                <h4>Company</h4>
                <p>Looking for staff</p>
              </div>
            </NavLink>
          </div>
          <p className="mainpar">Already signed up ? <NavLink to="/main">Login </NavLink></p>
        </div>
      </>
    );
  }

  return <Splash />;
}

export default Mainpage;
