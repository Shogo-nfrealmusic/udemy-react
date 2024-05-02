import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit. 
        Veniam necessitatibus quos ab deserunt nihil.
        Nisi distinctio commodi iste tempora dolor 
        rerum facere ad molestiae earum, fugit 
        consequatur quos eos reprehenderit.
      </p>
    </React.Fragment>

  );
};

export default Child;
