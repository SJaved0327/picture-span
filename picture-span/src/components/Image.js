//========== IMPORT ==========//

//React
import React from "react";

//========== STYLES ==========//


//========== COMPONENT ==========//

const Image = props => {

  <div>
    <img 
      input type="button" 
      src={props.src}
      style={styles.button}
      data-number={props.number}
      onClick={props.handleButtonClick}
    />
  </div>

};

//========== EXPORT ==========//

export default Image;
