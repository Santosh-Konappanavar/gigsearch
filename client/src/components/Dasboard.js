import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import "./all.css"

const Dasboard = () => {
  const navigate = useNavigate();
  const handlesucess = () => {
    navigate("/success");
  };
  const {logindata,setLoginData} = useContext(LoginContext);

  const history = useNavigate();

const Dashboardvalid = async()=>{
  let token = localStorage.getItem("userdatatoken");
  const res = await fetch("userValid",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":token
    }
  });
  const data = await res.json();
  if(data.status === 401 || !data){
    history("*")
  }else{
    console.log("user verify");
    setLoginData(data);
    history("/dash");
  }
};

useEffect(()=>{
  Dashboardvalid();
},[])

  return (
    <>
      <div className="dashbord-container" onClick={handlesucess}>
        <img src="./Vector.svg" alt="" />
        <h3>Verification in progress</h3>
        <p>
          We have received your application and a member of our staff will get
          in touch with you shortly.
        </p>
      </div>
    </>
  );
}

export default Dasboard;
