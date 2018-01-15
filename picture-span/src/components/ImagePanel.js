//========== IMPORT ==========//

// React

import React from "react";

// Components

import Image from "./Image";

//========== STYLES ==========//


//========== COMPONENT ==========//

const ImagePanel = props => {
    <div>
      <Image
      src={imageList[0]}
      handleButtonClick={props.handleButtonClick}
      />
      <Image
      src={imageList[1]}
      handleButtonClick={props.handleButtonClick}
      />
      <Image
      src={imageList[2]}
      handleButtonClick={props.handleButtonClick}
      />
      <Image
      src={imageList[3]}
      handleButtonClick={props.handleButtonClick}
      />
      <Image
      src={imageList[4]}
      handleButtonClick={props.handleButtonClick}
      />
    </div>
};

//========== EXPORT ==========//

export default ImagePanel;
