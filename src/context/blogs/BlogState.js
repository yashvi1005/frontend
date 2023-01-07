import React, { useState } from "react";
import BlogContext from "./BlogContext";

const BlogState = (props) => {
  const host = "http://localhost:5000";

  const categoryinitial = [];
  const [category, setCategory] = useState(categoryinitial);

  //get category
  const getCategory = async () => {
    //API call
    const response = await fetch(`${host}/api/admin/category`, {
      method: "GET",
    });
    const json = await response.json();
    setCategory(json);
  };

  //get user
  const getUser = async () => {
    //API call
    const response = await fetch(`${host}/api/admin/user`, {
      method: "GET",
    });
    const json = await response.json();
    setCategory(json);
  };

   //get Blogs
   const getBlog = async () => {
    //API call
    const response = await fetch(`${host}/api/admin/getBlog`, {
      method: "GET",
    });
    const json = await response.json();
    
    //  console.log(29, json)
    setCategory(json);
  };


  //get my blog
  const getMyBlog = async () => {
    //API call
    const response = await fetch(`${host}/api/blog/postFetchBlogs`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setCategory(json);
  }


  //   const response = await fetch(`${host}/api/blog/myPost`, {
  //     method: "GET",
  //     headers: {
  //       "auth-token": localStorage.getItem("token")
  //     },
  //   });
  //   const json = await response.json();
  //   setCategory(json);
  // }

  // delete my blog
  const deleteMyBlog = async (_id) => {
    //API call
    const response = await fetch(`${host}/api/blog/postDeleteBlog/${_id}`, {
      method: 'DELETE',
       headers: {
        'Content-Type': 'application/json',
        'auth-token'  : localStorage.getItem('token')
      },
      body: JSON.stringify({}) 
    });
    const json = response.json(); 
    console.log(json)
    // console.log('deleting note' + _id)
    const newBlogs = category.filter((blog) => {
      return blog._id !== _id
    })
    setCategory(newBlogs);
  }

  const deleteUser = async (_id) => {
    //API call
    const response = await fetch(`${host}/api/admin/postDeleteUser/${_id}`, {
      method: 'DELETE',
       headers: {
        'Content-Type': 'application/json',
        'auth-token'  : localStorage.getItem('token')
      },
      body: JSON.stringify({}) 
    });
    const json = response.json(); 
    console.log(json)
    // console.log('deleting note' + _id)
    const newUsers = category.filter((user) => {
      return user._id !== _id
    })
    setCategory(newUsers);
  }

  //Edit my Blog
  const editMyBlog = async (_id, title, description) => {
    //API Call
    const response = await fetch(`${host}/api/blog/postUpdateBlog/${_id}`, {
      method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
        'auth-token'  : localStorage.getItem('token')
      },
      body: JSON.stringify({title ,description}) 
    });
    const json = response.json(); 
    console.log(json)
  
    let newBlogs = JSON.parse(JSON.stringify(category))
    //Logic to edit in client
    for (let index = 0; index < newBlogs.length; index++) {
      const element = newBlogs[index];
      if(element._id === _id){
        newBlogs[index].title = title;
        newBlogs[index].description = description;
      }
      
    }
    setCategory(newBlogs)
}


//Edit Category
const editCategory = async (_id, category) => {
  //API Call
  const response = await fetch(`${host}/api/admin/postUpdateCategory/${_id}`, {
    method: 'PUT',
     headers: {
      'Content-Type': 'application/json',
      'auth-token'  : localStorage.getItem('token')
    },
    body: JSON.stringify({category}) 
  });
  const json = response.json(); 
  console.log(json)

  let newcategory = JSON.parse(JSON.stringify(category))
  //Logic to edit in client
  for (let index = 0; index < newcategory.length; index++) {
    const element = newcategory[index];
    if(element._id === _id){
      newcategory[index].category = category;
    }
    
  }
  setCategory(newcategory)
}



   //Delete Category
   const deleteCategory = async (_id) => {
    //API call
    const response = await fetch(`${host}/api/admin/postDeleteCategory/${_id}`, {
      method: 'DELETE',
       headers: {
        'Content-Type': 'application/json',
        'auth-token'  : localStorage.getItem('token')
      },
      body: JSON.stringify({}) 
    });
    const json = response.json(); 
    console.log(json)
    // console.log('deleting note' + _id)
    const newcategories = category.filter((category) => {
      return category._id !== _id
    })
    setCategory(newcategories);
  }

 




  return(
    <BlogContext.Provider value={{category,getUser, getCategory, getBlog, getMyBlog, deleteUser, deleteMyBlog,editCategory, editMyBlog, deleteCategory }}>
        {props.children}
    </BlogContext.Provider>
)
};



export default BlogState;
