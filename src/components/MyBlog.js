import React, { useContext, useState, useRef, useEffect } from "react";
import BlogContext from "../context/blogs/BlogContext";
import MyBlogItem from "./MyBlogItem";
import Navbar from "./Navbar";

const MyBlog = (props) => {
  // const [myBlog, setMyBlog] = useState(null);
  const context = useContext(BlogContext);

  useEffect(() => {
    // fetch(`http://localhost:5000/api/blog/postFetchBlogs`, {
    //   headers: {
    //     "auth-token": localStorage.getItem("token"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(18, result)
    //     setMyBlog(result);
    //     console.log(19, myBlog)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getMyBlog();
  }, []);

  const { category, getMyBlog, editMyBlog } = context;
  // getMyBlog();
  const [blogs, setBlog] = useState({
    id: "",
    etitle: "",
    edescription: "",
  });

  const updateBlog = (currentBlog) => {
    ref.current.click();
    setBlog({
      id: currentBlog._id,
      etitle: currentBlog.title,
      edescription: currentBlog.description,
    });
  };
  const ref = useRef(null);
  const refclose = useRef(null);

  const handleUpdate = (e) => {
    // e.preventDefault();
    editMyBlog(blogs.id, blogs.etitle, blogs.edescription);
    refclose.current.click();
  };

  const onChange = (e) => {
    setBlog({ ...blogs, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Navbar />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo Model
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Blog
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={blogs.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={blogs.edescription}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-2">
        {category.length === 0 && <h5>No blog found</h5>}
      </div>
      {category.map((blogs) => {
        return (
          <>
            <MyBlogItem key={blogs._id} blogs={blogs} updateBlog={updateBlog} />
          </>
        );
      })}
    </>
  );
};
export default MyBlog;
