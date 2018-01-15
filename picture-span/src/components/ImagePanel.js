//========== IMPORT ==========//

// React

import React from "react";

// Components

import Image from "./Image";

//========== STYLES ==========//


//========== COMPONENT ==========//

//list of image sources
const srcList = [
  'https://thumbs.dreamstime.com/b/happy-smiling-boston-terrier-puppy-cute-seven-week-old-mouth-open-54647834.jpg',
  'https://www.purina.com/sites/g/files/auxxlc196/files/NonSporting_Boston-Terrier.jpg',
  'http://www.petguide.com/wp-content/uploads/2016/08/froston.jpg',
  'http://www.petguide.com/wp-content/uploads/2016/08/froston.jpg',
  'http://www.petguide.com/wp-content/uploads/2016/08/froston.jpg'
];


const ImagePanel = props => (
  <div>
    <Image
    src={srcList[0]}
    data-value='0'
    handleButtonClick={props.handleButtonClick}
    />
    <Image
    src={srcList[1]}
    data-value='1'
    handleButtonClick={props.handleButtonClick}
    />
    <Image
    src={srcList[2]}
    data-value='2'
    handleButtonClick={props.handleButtonClick}
    />
    <Image
    src={srcList[3]}
    data-value='3'
    handleButtonClick={props.handleButtonClick}
    />
    <Image
    src={srcList[4]}
    data-value='4'
    handleButtonClick={props.handleButtonClick}
    />
  </div>
);

//========== EXPORT ==========//

export default ImagePanel;
