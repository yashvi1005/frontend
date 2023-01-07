import React, {useContext, useEffect} from 'react';
import blogContext from '../context/blogs/BlogContext';
import BlogItem from './BlogItem'

const Blogs = () => {
    const context = useContext(blogContext);

  const { category, getBlog } = context;
  // useEffect(() => {
  //   getBlog();
  // }, [])
  getBlog();
  return (
    <>
   <div className="container mx-2">
          {category.length === 0 && <h5>No blog found</h5>}
        </div>
        {category.map((blogs) => {
          return (
        <BlogItem key={blogs._id} blogs ={blogs} />
          );
        })}
    </>
  )
}

export default Blogs
