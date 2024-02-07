import React, { useState } from 'react'
import{ NavLink } from 'react-router-dom'
import "./mix.css"
const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setcPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    });

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

    const addUserdata = async(e) => {
        e.preventDefault();
        const {fname,email,password,cpassword} = inpval;
        if(fname === ""){
            alert("please enter your name")
        }else if(email === ""){
            alert('please enter you Email')
        }else if(!email.includes("@")){
            alert('please enter you Email')
        }else if(password === ""){
            alert("enter the password")
        }else if(password.length < 4){
            alert("password must be 4 char")
        }else if(cpassword === ""){
            alert("enter the confirm password")
        }else if(cpassword.length < 4){
            alert("confirm password must be 6 char")
        }else if(password !== cpassword){
            alert("password and confirm password not match")
        }else{
            // console.log('use registration successfully done')
            const data = await fetch("http://localhost:8000/register",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                fname,email,password,cpassword
              })

        });
        const res = await data.json();
        // console.log(res);
        if(res.status===201){
          alert("user registration done")
          setInpval({...inpval, fname:"",email:"",password:"",cpassword:""})
        }
        }
    }

    
  return (
    <>
        <section>
        <div className="form_data">
          <div className="form_heading">
          <img src="./Group 2 (1).svg" alt="#" />
          </div>
          <form>
          <h1>Create account</h1>
          <div className="form_input">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                onChange={setval}
                value={inpval.fname}
                name="fname"
                id="fname"
                placeholder="Enter You Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setval}
                value={inpval.email}
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
                  onChange={setval}
                  value={inpval.password}
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

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  onChange={setval}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                />
                <div
                  className="showpass"
                  onClick={() => setcPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserdata} >Create account</button>
            <p>By creating an account or signing you agree to our Terms and Conditions</p>
            <p>Already have an account? <NavLink to="/main">Log in</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register