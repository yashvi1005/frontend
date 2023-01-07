import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from './Navbar'

const OtherUserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [showFollow, setNotShowFollow] = useState(true);
  const { userid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/auth/user/${userid}`, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(17, result);
        setUserProfile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const followUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json ",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    });
    setNotShowFollow(false);  
    console.log(67, response);
  };

  const unfollowUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json ",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        unfollowId: userid,
      }),
    });
    console.log(67, response);
  };
  return (
    <>
    <Navbar />
      {!userProfile ? (
        <h2> Loading....</h2>
      ) : (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "19px 0px 19px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                style={{ width: "160px", height: "160px", borderRadius: "50%" }}
                alt="not found"
                src={`http://localhost:5000/${userProfile.user.image}`}
                // src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwZ2lybHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div>
              <h4>{userProfile.user.fname}</h4>
              <h5>{userProfile.user.email}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>{userProfile.blog.length} Posts</h6>
                <h6>{userProfile.user.followers.length} Follwers</h6>
                <h6>{userProfile.user.following.length} Following</h6>
              </div>
              {showFollow ? 
              <button className="btn btn-primary" onClick={followUser}>
                Follow
              </button>
              :
              <button className="btn btn-primary mx-2" onClick={unfollowUser}>
                Unfollow
              </button>
              }
            </div>
          </div>
          <div className="gallery">
            {userProfile.blog.map((item) => {
              return (
                <>
                  {item.length === 0 ? (
                    <h3>"No post found"</h3>
                  ) : (
                    <img
                      key={item._id}
                      className="item"
                      src={`http://localhost:5000/${item.image}`}
                      alt={item.title}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default OtherUserProfile;
