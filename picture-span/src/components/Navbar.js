import React from "react";

const score = {
  current: 0,
  top: 0
};

const styles = {
  panel: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

const Navbar = () => (
  <div className="row" style={styles.panel} style={styles.heading}>
    <div className="col-lg-4">
      <div className="text-left">Picture Span</div>
    </div>
    <div className="col-lg-4">
      <div className="text-center">Click an image to begin!</div>
    </div>
    <div className="col-lg-4">
      <div className="text-right">Score: {score.current} | Top Score: {score.top}</div>
    </div>
  </div>
);

export default Navbar;
