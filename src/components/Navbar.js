import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("fname");
    navigate("/login");
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src="./images/b.png"></img> */}   

          <h3>
            <span style={{ fontSize: "48px" }}> 🅿️</span>ictures Feed
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="centerdiv">
            {!localStorage.getItem("token") ? (
              <>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/">
                      Home
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/contactus">
                      Contact us
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/aboutus">
                      About us
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
              <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/">
                      Home
                    </Link>
                  </li>
                </ul>
                
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/myblog">
                      My Blog
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/newblog">
                      New Blog
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/contactus">
                      Contact us
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/aboutus">
                      About us
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-center">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/myprofile">
                      My profile
                    </Link>
                  </li>
                </ul>
                
              </>
            )}
          </div>

          <div className="lastdiv">
            {!localStorage.getItem("token") ? (
              <ul className="text-right">
                <li className="nav-item">
                  <Link
                    className="btn btn-primary"
                    aria-current="page"
                    to="/login">
                    Login
                  </Link>

                  <Link className="btn btn-primary mx-2" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            ) : (
              <>
              <div className="logout-fname">
                <h5 style={{fontWeight:400}}>welcome {localStorage.getItem('fname')} 🙋‍♂️</h5>
                <button onClick={handleLogout} className="btn btn-primary text-right">
                  Logout
                </button>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
