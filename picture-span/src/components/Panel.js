import React from "react";

const styles = {
  panel: {
    background: "#e8eaf6"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

const Panel = () => (
  <div style={styles.panel}>
    <div style={styles.heading}>Lorem ipsum dolor</div>
    <div style={styles.content}>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium"
    </div>
  </div>
);

export default Panel;
