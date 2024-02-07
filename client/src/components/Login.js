import React, { useState } from "react";
import{ NavLink ,useNavigate} from 'react-router-dom';
import "./mix.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email:"",
    password:""
});

const history = useNavigate();

const setval = (e) => {
    // console.log(e.target.value);
    const {name,value} = e.target;

    setInpval(()=>{
        return {
            ...inpval,
            [name]:value
        }
    })
}

const loginuser = async(e) => {
    e.preventDefault();
    const {email,password} = inpval;
    if(email === ""){
        alert('please enter you Email')
    }else if(!email.includes("@")){
        alert('please enter you Email')
    }else if(password === ""){
        alert("enter the password")
    }else if(password.length < 4){
        alert("password must be 6 char")
    }else{
      // console.log('use registration successfully done')
      const data = await fetch("http://localhost:8000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
              email,password
        })

  });
  const res = await data.json();
  console.log(res);
  if(res.status===201){
    localStorage.setItem("userdatatoken",res.result.token)
    history("/dash")
    setInpval({...inpval,email:"",password:""})
  }
  }
}

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Explore the app</h1>
            <p>Now your finances are in one place and always under control</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setval}
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={inpval.password}
                  onChange={setval}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={loginuser}>Login</button>
            <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
