import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import blogContext from "../../context/blogs/BlogContext";

const ManageCategory = () => {
  const context = useContext(blogContext);

  const { category, getCategory, deleteCategory } = context;
  useEffect(() => {
    getCategory();
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
        }}
      >
        <div className="container mx-2">
          {category.length === 0 && <h5>No Category found</h5>}
        </div>
        <table className="table table-striped" style={{ border: "1px" }}>
          <thead>
            <tr>
              <th>category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {category.map((category) => {
            return (
              <>
                <tr>
                  <td>{category.category}</td>
                  <td>
                    <button type="button" className="editCategoryButton"
                     >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "red" }}
                      type="button"
                      className="deleteCategoryButton"
                      onClick={() => {deleteCategory(category._id)}}
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

export default ManageCategory;
