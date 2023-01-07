import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([]);
  // const { userid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/myPost`, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserProfile(result.myBlog);
        console.log(17, result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "550px", margin: "0px auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "19px 0px 19px 0px",
            borderBottom: "1px solid grey",
          }}
        >
          {userProfile.map((item) => {
            return(
              <>
          <div>
            <img key={item.user._id}
              style={{ width: "160px", height: "160px", borderRadius: "50%" }}
              alt="not found"
              src={`http://localhost:5000/${item.user.image}`}
            />
          </div>
          <div>
            <h4>{item.user.fname}</h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>{userProfile.length} Posts</h6>
            </div>
          </div>
          </>)
          })}
        </div>
        <div className="gallery">
          {userProfile.map((item) => {
            return (
              <img
                key={item._id}
                className="item"
                src={`http://localhost:5000/${item.image}`}
                alt={item.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
