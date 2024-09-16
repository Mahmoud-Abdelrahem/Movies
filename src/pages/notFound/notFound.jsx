import React from "react";
import "./styleNotFound.css";

function NotFound() {
  return (
    <>
      <div className="number">
        <div className="text">
          <span>Oops...</span>
          <br />
          Page not Found
        </div>
        <a
          href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        ></a>
      </div>
    </>
  );
}

export default NotFound;
