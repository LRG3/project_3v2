import React from "react";

const navStyle = {
  display: 'flex', 
  justifyContent: "space-between"
};

const aStyle = {  
  fontSize: '15px' 
};

function Nav() {
  return (
    <nav style={navStyle} className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Movie Hub
      </a>
      <a style={aStyle} className="navbar-brand" href="#" >
        Welcome
      </a>
    </nav>
  );
}

export default Nav;
