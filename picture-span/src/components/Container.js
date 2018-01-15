//========== IMPORT ==========//

// React

import React, { Component } from "react";

// Components

import ImagePanel from "./ImagePanel";

//========== STYLES ==========//



//========== COMPONENT ==========//

class Container extends React.Component {
  
  //state
	state = {
    score: 0,
    topScore: 0,
    clicked: []
  };

  imageList = [
    'https://thumbs.dreamstime.com/b/happy-smiling-boston-terrier-puppy-cute-seven-week-old-mouth-open-54647834.jpg',
    {src: "https://www.purina.com/sites/g/files/auxxlc196/files/NonSporting_Boston-Terrier.jpg"},
    {src: "http://www.petguide.com/wp-content/uploads/2016/08/froston.jpg"}
  ];
  //handleButtonClick
  handleButtonClick = event => {
    
    //get the data-number value of the clicked button
    const current = event.target.attributes.getNamedItem("data-number").value;
    //make copy of current state to modify
    const newState = { ...this.state };
    //match
    let match = false;

    for (let i = 0; i < newState.clicked.length; i++){
      if (current === newState.clicked[i]){
        match = true;
      }
    }

    if (match === true){
      //reset score
      newState.score = 0;
      //topScore stays the same
      newState.topScore; 
      //empty out clicked array
      newState.clicked = [];
    }

    if (match === false){
      //score increases by 1
      newState.score++;
      //push current into clicked array
      newState.clicked.push(current);
      //if Score is greater than topScore...
      if (newState.score > newState.topScore){
        //topScore now set to same value as current score
        newState.topScore = newState.score;
      }
    }

    //set state to newState to update
    this.setState(newState);

  };

  //render
	render = () => (
	  <div className="container">
	    <ImagePanel handleButtonClick={this.handleButtonClick} />
	  </div>
	);
}

//========== EXPORT ==========//

export default Container;
