import React ,{ useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "./ContextProvider/Context";
import "./header.css";
const Header = () => {

  const {logindata,setLoginData} = useContext(LoginContext);
console.log(logindata)
  return (
    <>
      <header>
        <nav>
          <h1>GigSearch </h1>
          <div className="avtar">
            {logindata.Validuserone ? <Avatar style={{ background: "blue" }}>{logindata.Validuserone.fname[0].toUpperCase()}</Avatar> : <Avatar style={{ background: "blue" }}>S</Avatar>}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
