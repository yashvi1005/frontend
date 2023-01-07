import React from 'react'
import $ from 'jquery'; 
import {Link} from 'react-router-dom'
import AdminNav from './AdminNav';


const Sidebar = () => {
    const category = () => {
        $("#category").slideToggle();
        $("#users").slideUp();
         $("#blogs").slideUp();
         $("#contact").slideUp();
    };

    const users = () => {
        $("#users").slideToggle();
        $("#category").slideUp();
         $("#blogs").slideUp();
         $("#contact").slideUp();
    };

    const blogs = () => {
        $("#blogs").slideToggle();
        $("#users").slideUp();
         $("#category").slideUp();
         $("#contact").slideUp();
    };

    const contact = () => {
        $("#contact").slideToggle();
        $("#users").slideUp();
         $("#category").slideUp();
         $("#blogs").slideUp();
    };

    const about = () => {
        $("#about").slideToggle();
        $("#contact").slideUp();
        $("#users").slideUp();
         $("#category").slideUp();
         $("#blogs").slideUp();
    };
  return (
    <>
    <AdminNav />
    <div>
      <div className="sidebar">
  
  <div className="box" onClick={category}>
  <i className="bi bi-grip-horizontal"></i>&nbsp;&nbsp;&nbsp; Category  
      <ul id="category">
        <li>
          <Link className='sidebar-a' to="/admin/addCategory">Add Category</Link>
        </li>
        <li>
          <Link className='sidebar-a' to="/admin/manageCategory">Manage Category</Link>
        </li>
      </ul>
  </div>
  <div className="box" onClick={users}>
  <i className="bi bi-people"></i>&nbsp;&nbsp;&nbsp; Users          
      <ul id="users">
        <li>
          <Link className='sidebar-a' to="/admin/manageUser">Manage Users</Link>
        </li>
      </ul>
  </div>

  <div className="box" onClick={blogs}>
     <i className="bi bi-pencil-square"></i>&nbsp;&nbsp;&nbsp;Blogs          
      <ul id="blogs">
        <li>
          <Link className='sidebar-a' to="/admin/manageBlog">Manage Blogs</Link>
        </li>
      </ul>
  </div>
  <div className="box" onClick={contact}>
  <i className="bi bi-telephone-inbound"></i>&nbsp;&nbsp;&nbsp;Contact us          
      <ul id="contact">
      </ul>
  </div>

  <div className="box" onClick={about}>
  <i className="bi bi-card-text"></i>&nbsp;&nbsp;&nbsp;About us        
      <ul id="about">
      </ul>
  </div>

</div>


    </div>
    </>
  )
}

export default Sidebar
