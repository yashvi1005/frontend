import React, { useContext } from "react";
import BlogContext from "../context/blogs/BlogContext";

const MyBlogItem = (props) => {
  const { deleteMyBlog } = useContext(BlogContext);
  const { blogs, updateBlog } = props;
  return (
    <div className="blog_card" style={{ marginTop: "20px" }}>
      <div style={{ paddingTop: "30px", marginLeft: "20px" }}>
        <span>{blogs.title}</span>
        <span>
          <button
            style={{
              float: "right",
              marginLeft: "10px", 
              marginRight: "10px",
              width: "80px",
              marginBottom: "15px",
            }}
            onClick={() => {
              deleteMyBlog(blogs._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            style={{ float: "right", width: "80px" }}
            className="btn btn-success"
            onClick={() => {
              updateBlog(blogs);
            }}
          >
            Edit
          </button>
        </span>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <img
          src={`http://localhost:5000/${blogs.image}`}
          className="card_img"
          alt="not found"
        ></img>
      </div>
      <div
        style={{ marginTop: "20px", marginLeft: "20px", paddingBottom: "20px" }}
      >
        {blogs.description}
      </div>
      {/* <small className="text-muted" style={{ marginTop: "20px", marginLeft: "10px", textAlign: "center" }}>
        By {blogs.author} on {new Date(blogs.created).toGMTString()}
      </small> */}
    </div>
  );
};

export default MyBlogItem;
