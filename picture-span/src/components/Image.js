//========== IMPORT ==========//

import React from "react";

//========== STYLES ==========//

const styles = {
  button {
    color: white
  }
};

//========== COMPONENT ==========//

const Image = props =>
  <div>
      <img 
        input type="button" 
        src={props.src}
        style={styles.button}
        data-active={props.active}
      />
  </div>
};

//========== EXPORT ==========//

export default Image;
