import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.titleName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('primary');}}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('danger');}}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('success');}}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('warning');}}
            ></div>
            <div
              className="bg-light rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('light');}}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={()=>{props.toggleMode('dark');}}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = { titleName: PropTypes.string.isRequired };
NavBar.defaultProps = {
  titleName: "Set Title Here",
  aboutText: "About Text Here",
};
