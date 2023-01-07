import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    image: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onImage = (event) => {
    setCredentials({ ...credentials, image: event.target.files[0] });
  };

    const handleSignup = async (f) => {
    f.preventDefault();
    const url = "http://localhost:5000/api/auth/signup";
    const formData = new FormData();

    formData.append("fname", credentials.fname);
    formData.append("lname", credentials.lname);
    formData.append("image",credentials.image, credentials.image.name);
    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    try {
      const response = await axios.post(url, formData);
      navigate("/login")
      if (response.status === 200) {
        console.log("Successfully created account");
        navigate("/login")
      }
    } catch (error) {
      console.log(42,error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="container my-3">
      <div className="container text-center">
        <h2>Signup to get more with Blogs...✍️(◔◡◔) </h2>
      </div>
      <form onSubmit={handleSignup} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            onChange={onChange}
            id="fname"
            value={credentials.fname}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            onChange={onChange}
            id="lname"
            value={credentials.lname}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Profile image
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={onImage}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
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
            value={credentials.password}
            onChange={onChange}
            id="password"
            minLength={5}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="cpassword"
            onChange={onChange}
            id="cpassword"
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

export default Signup;
