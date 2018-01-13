//========== IMPORT ==========//

// React

import React from "react";

// Components

import ImagePanel from "./ImagePanel";

//========== STYLES ==========//

const styles = {
  container: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#D3D3D3"
  }
};

//========== COMPONENT ==========//

const Container = () => (
  <div className="container" style={styles.container}>
    <ImagePanel />
  </div>
);

//========== EXPORT ==========//

export default Container;
