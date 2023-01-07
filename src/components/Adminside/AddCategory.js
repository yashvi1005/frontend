import axios from "axios";
import React, { useState,  } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";


const AddCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState({ category: "" });

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    // console.log(11, setCategory)
  };

  const handleCategory = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/admin/category";
    const formData = new FormData();

    formData.append("category", category.category);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json ",
        },
      });

      if (response.status === 200) {
        console.log("category added successfully");
        navigate("/admin/manageCategory")
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <div className="container my-3">
          <div className="container text-center">
            <h2>Add Category...📝 </h2>
          </div>
          <form onSubmit={handleCategory} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                name="category"
                onChange={onChange}
                id="category"
                value={category.category}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </span>
    </>
  );
};

export default AddCategory;
