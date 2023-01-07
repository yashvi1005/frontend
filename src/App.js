import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AdminNav from "../src/components/Adminside/AdminNav";
import BlogState from "./context/blogs/BlogState";
import NewBlog from "./components/NewBlog";
import MyBlog from "./components/MyBlog";
import UserProfile from "./components/UserProfile";
import OtherUserProfile from "./components/OtherUserProfile";

import AdminHome from '../src/components/Adminside/Home'
import AddCategory from "./components/Adminside/AddCategory";
import ManageCategory from "./components/Adminside/ManageCategory";
import ManageUser from "./components/Adminside/ManageUser";
import ManageBlog from "./components/Adminside/ManageBlog";

function App() {
  
  return (
    <>
    <BlogState>
      <Router>
      {/* {window.location.pathname === ('/admin')? <AdminNav /> : <Navbar /> } */}
        
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/newblog" element={<NewBlog  />} />
          <Route exact path="/myblog" element={<MyBlog  />} />
          <Route exact path="/myprofile" element={<UserProfile  />} />
          <Route exact path="/otherprofile/:userid" element={<OtherUserProfile  />} />

          <Route exact path="/admin/" element={<AdminHome />} />
          <Route exact path="/admin/addCategory" element={<AddCategory />} />
          <Route exact path="/admin/manageCategory" element={<ManageCategory />} />
          <Route exact path="/admin/manageUser" element={<ManageUser />} />
          <Route exact path="/admin/manageBlog" element={<ManageBlog />} />

        </Routes>
       
      </Router>
      </BlogState>
    </>
  );
}

export default App;
