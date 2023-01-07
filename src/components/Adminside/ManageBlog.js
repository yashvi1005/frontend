import React,{useContext, useEffect} from "react";
import Sidebar from "./Sidebar";
import blogContext from "../../context/blogs/BlogContext";


const ManageBlog = () => {
  const context = useContext(blogContext);

    const { category, getBlog, deleteMyBlog } = context;
    useEffect(() => {
      getBlog();
    })
  return (
    <>
      <span style={{ float: "left" }}>
        <Sidebar />
      </span>
      <span
        style={{
          float: "left",
          height: "auto",
          width: "70%",
          marginLeft: "60px",
          border: "solid 1px none",
        }}>
          <div className="container mx-2">
          {category.length === 0 && <h5>No Blog found</h5>}
        </div>
        <table className="table table-striped" style={{ border: "1px" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>

          {category.map((blog) => {
            return (
              <>
                <tr>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{blog.description}</td>
                  <td>
                  <img style={{height:"150px", width:"200px"}} src={`http://localhost:5000/${blog.image}`} alt="not found"></img>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "red", width:"100px" }}
                      type="button"
                      className="deleteCategoryButton"
                      onClick={() => {deleteMyBlog(blog._id)}}
                    >
                      Delete
                    </button>
                  </td>
                  </tr>
              </>
            );
          })}
                  </table>

        </span>
    </>
  );
};

export default ManageBlog;
