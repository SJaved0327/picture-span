//========== IMPORT ==========//

// React

import React from "react";

//========== STYLES ==========//

const styles = {
  header: {
    background: "#f9b713",
  	height: "200px",
  	textAlign: "center",
  	color: "white",
  	fontSize: "3rem",
  	paddingTop: "75px"
  }
};

//========== COMPONENT ==========//

const Header = () => (
  <header className="header">
    <h1>Picture Span</h1>
  </header>
);

//========== EXPORT ==========//

export default Header;