import React,{useContext} from "react";
import blogContext from "../../context/blogs/BlogContext";


const Dashboard = () => {
  const context = useContext(blogContext);
  const {category, getBlog } = context;
  getBlog();
  return (
    <>
      <div className="out-box">
        <div className="box1">
          Category
          <div className="inner-box">
           { console.log(16, category)}
            <h3>4</h3>
          </div>

          
        </div>
      
        <div className="box1">
          Users
          {console.log(27,category)}
          <div className="inner-box">
            <h3>
              8
            </h3>
            </div>
        </div>
        <div className="box1">
          Blogs
          <div className="inner-box">
            <h3>
            {category.length}
            </h3>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
