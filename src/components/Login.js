import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    
    const json = await response.json();

    console.log('your json data: ',json);
    if(credentials.email === "yashvi@gmail.com" && credentials.password === "yashvi" ){
      localStorage.setItem("token", json.authtoken)
      localStorage.setItem("name", "admin")
      navigate("/admin")
      window.location.reload();
    }else{
      if (json.success) {
        // console.log(29, json)
        localStorage.setItem("token", json.authtoken);
        console.log(json)
        localStorage.setItem("user", json.data.user.id)
        localStorage.setItem("fname", json.data.user.fname)
        navigate("/");
        window.location.reload();
        console.log("sucessfully Logedin", "success");
        console.log(35, json)
      } else {
        console.log("Credentials wrong", "danger");
      }
      
      // navigate("/");
      // window.location.reload();
    }
   
   
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar />
    <div className="container my-3">
      <div className="container text-center">
        <h2>Login to get more with Blogs... </h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onChange}
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={onChange}
            id="password"
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
