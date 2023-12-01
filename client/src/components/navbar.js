import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Nav-bar">
        <div className="Nav-container">
          <span>
            <Link to={"/actor"}>
              <p className="Nav-text" id='actor-link'>Actor</p>
            </Link>
          </span>
          <span>
            <Link to={"/"}>
              <p className="Nav-text" id='director-link'>Director</p>
            </Link>
          </span>

          <span>
            <Link to={"/title/"}>
              <p className="Nav-text" id='title-link'>Title</p>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
