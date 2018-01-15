//========== IMPORT ==========//

//React
import React from "react";

//========== STYLES ==========//


//========== COMPONENT ==========//

const Image = props => (

  <div>
    <img 
      input type="button" 
      src={props.src}
      data-value={props.dataValue}
      onClick={props.handleButtonClick}
    />
  </div>

);

//========== EXPORT ==========//

export default Image;
