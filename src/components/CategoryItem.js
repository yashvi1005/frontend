import React, { useContext } from "react";
// import blogContext from "../context/notes/BlogContext.js";

const NoteItem = (props) => {
  // const context = useContext(blogContext);

  const { category } = props;
  return (
    <div className="col-md-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{category.category}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
