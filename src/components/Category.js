import React, {useContext} from 'react';
import blogContext from '../context/blogs/BlogContext';
import CategoryItem from './CategoryItem'

const Category = (props) => {
    const context = useContext(blogContext);

  const { category, getCategory } = context;
  getCategory();
  return (
    <>
   <div className="container mx-2">
          {category.length === 0 && <h5>No Category found</h5>}
        </div>
        {category.map((category) => {
          return (
        <CategoryItem key={category._id} category ={category} />
          );
        })}
    </>
  )
}

export default Category
