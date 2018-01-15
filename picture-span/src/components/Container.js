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

  //handleButtonClick
  handleButtonClick = event => {
    
    //get the data-number value of the clicked button
    const current = event.target.attributes.getNamedItem("data-value").value;
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
