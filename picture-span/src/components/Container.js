//========== IMPORT ==========//

// React

import React, { Component } from "react";

// Components

import ImagePanel from "./ImagePanel";

//========== STYLES ==========//

const styles = {
  container: {
    color: white
  }
};

//========== COMPONENT ==========//

class Container extends React.Component{
  //state
	state = {
    score: 0,
    topScore: 0
  };
  //handleButtonClick
  handleButtonClick = event => {
    //get the data-clicked value of the clicked button
    const clickedState = event.target.attributes.getNamedItem("data-clicked").value;
    //make copy of current state to modify
    const newState = { ...this.state };

    if (clickedState === true) {
      //reset Score
      this.state.score = 0;
      //topScore stays the same
      this.state.topScore;
    } else {
      //Score increases by 1
      this.state.score++;
      //if Score is greater than topScore...
      if (this.state.score > this.state.topScore){
        //topScore now set to same value as current score
        this.state.topScore = this.state.score;
      };
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };





  //render
	render = () => (
	  <div className="container" style={styles.container}>
	    <ImagePanel clickImage={this.props.clickImage}/>
	  </div>
	);
}

//========== EXPORT ==========//

export default Container;
