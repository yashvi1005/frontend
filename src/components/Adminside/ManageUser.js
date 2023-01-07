import React,{useContext, useEffect} from 'react'
import Sidebar from './Sidebar'
import blogContext from "../../context/blogs/BlogContext";


const ManageUser = () => {
    const context = useContext(blogContext);

    const { category, getUser, deleteUser } = context;
    useEffect(() => {
      getUser();
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
          {category.length === 0 && <h5>No Category found</h5>}
        </div>
        <table className="table table-striped" style={{ border: "1px" }}>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Profile Image</th>
              <th>Delete</th>
            </tr>
          </thead>

          {category.map((user) => {
            return (
              <>
                <tr>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                  <img style={{height:"150px", width:"200px"}} src={`http://localhost:5000/${user.image}`} alt="not found"></img>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "red", width:"100px" }}
                      type="button"
                      className="deleteCategoryButton"
                      onClick={() => {deleteUser(user._id)}}
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
  )
}

export default ManageUser
