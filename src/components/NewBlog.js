import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const NewBlog = () => {
  const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        title: "",
        author: "",
        image: "",
        description: ""
      });

      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
      const onImage = (event) => {
        setCredentials({ ...credentials, image: event.target.files[0] });
      };

      const handlenewblog = async (f) => {
        f.preventDefault();
        const url = "http://localhost:5000/api/blog/postblog";
        const formData = new FormData();
    
        formData.append("title", credentials.title);
        formData.append("author", credentials.author);
        formData.append("image",credentials.image, credentials.image.name);
        formData.append("description", credentials.description);
    
        try {
          const response = await axios.post(url, formData, {
            headers: {
                'auth-token'  : localStorage.getItem('token')
              }
          });
          if (response.status === 200) {
            console.log("Successfully created Blog");
            navigate("/")
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <>
    <Navbar />
    <div className="container my-3">
      <div className="container text-center">
        <h2>Add your Blogs...👩‍💻 </h2>
      </div>
      <form onSubmit={handlenewblog} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onChange}
            id="title"
            value={credentials.title}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            name="author"
            onChange={onChange}
            id="author"
            value={credentials.author}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Blog image
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={onImage}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={credentials.description}
            onChange={onChange}
            id="description"
            required
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};



export default NewBlog
