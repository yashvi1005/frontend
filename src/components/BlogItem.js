import React, { useContext } from "react";
// import BlogContext from "../context/blogs/BlogContext";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  // const context = useContext(BlogContext);

  // const {  } = context;

  const { blogs } = props;

  const likePost = async (id) => {
    const response = await fetch("http://localhost:5000/api/blog/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json ",
        // 'Accept': 'application/json',
        // "Access-Control-Origin": "*",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        blogId: id,
      }),
    });
  };

  const unlikePost = async (id) => {
    const response = await fetch("http://localhost:5000/api/blog/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json ",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        blogId: id,
      }),
    });
  };

  const commentPost = async (text, id) => {
    const response = await fetch("http://localhost:5000/api/blog/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json ",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        blogId: id,
        text: text,
      }),
    });
    console.log(54, response);
  };
  return (
    <div className="blog_card">
      <small style={{ marginTop: "20px" }}>
        <h5 style={{ marginLeft: "20px" }}>
          <Link
            to={
              blogs.user !== localStorage.getItem("user")
                ? "/otherprofile/" + blogs.user
                : "/myprofile/"
            }
          >
            {blogs.author}
          </Link>
        </h5>
        <h5 style={{ marginLeft: "20px", fontSize: "15px" }}>
          {new Date(blogs.created).toLocaleDateString()}
        </h5>
      </small>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>{blogs.title}</div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <img
          src={`http://localhost:5000/${blogs.image}`}
          className="card_img"
          alt="not found"
        ></img>
      </div>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        {blogs.description}
      </div>
      <div className="like-comment">
        <span>
          {blogs.likes.includes(localStorage.getItem("user")) ? (
            <span onClick={() => {unlikePost(blogs._id); }} className="bi bi-heart-fill fa-2x" style={{ color: "red" }}  ></span>
          ) : (
            <span
              onClick={() => {
                likePost(blogs._id);
              }}
              className="bi bi-heart fa-2x"
            ></span>
          )}
        </span>
        <span style={{ display: "inline-block" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              commentPost(e.target[0].value, blogs._id);
            }}
          >
            <i style={{ marginLeft: "20px" }} className="bi bi-chat fa-2x"></i>
            <input
              style={{ marginLeft: "10px", marginTop: "10px" }}
              type="text"
              placeholder=" add a comment"
            />
          </form>
        </span>

        <div>
          <h5 style={{ marginTop: "10px", fontWeight: "400" }}>
            {blogs.likes.length} likes
          </h5>
        </div>

        {blogs.comments.map((comments) => {
          // console.log(79 , comments)
          return (
            <>
              <h6 style={{ marginTop: "20px" }} key={comments._id}>
                {comments.text}
              </h6>
              <span style={{ fontWeight: "500" }}>
                {/* {comments.postedBy} */}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BlogItem;
