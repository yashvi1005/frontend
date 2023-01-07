import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from '../Login'

const AdminNav = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            ⩘dmin Ðash
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
            <div
              style={{ color: "white", paddingTop: "15px" }}
              className="centerdiv"
            >
              {localStorage.getItem('token') ? (
              <>
              
              <div className="lastdiv-navadmin">
                <div className="logout-fname">
                <h5 style={{fontWeight:400, marginRight:"10px"}}>welcome {localStorage.getItem('name')} 👩‍💻</h5>
                <button onClick={handleLogout} className="btn btn-primary text-right">
                  Logout
                </button>
                </div>
                </div>
              </>
            ):  <Login />  }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
