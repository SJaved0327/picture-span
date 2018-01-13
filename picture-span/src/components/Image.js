//========== REACT ==========//

import React from "react";

//========== STYLES ==========//

const styles = {
  panel: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#D3D3D3"
  },
  image: {
  	borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#D3D3D3"
  },
  button: {
    padding: "5px",
    height: "200px",
    width: "200px"
  }
};

//========== HELPER FUNCTION ==========//



// https://www.what-dog.net/Images/faces2/scroll001.jpg

//========== COMPONENT ==========//

class Image extends React.Component {
  render = () => (
    <div>
        <img inpu type="button" src='https://www.what-dog.net/Images/faces2/scroll001.jpg' alt='doggy' style={styles.button}/>
    </div>
  );
};

//========== EXPORT ==========//

export default Image;
