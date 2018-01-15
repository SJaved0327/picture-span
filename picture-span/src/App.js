//========== IMPORT ==========//

// React

import React, { Component } from "react";

// Components

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

//========== CLASS ==========//

// App 

class App extends React.Component {

	//render
	render = () => (
		<div className="container-fluid">
		  <Navbar />
		  <Jumbotron />
		  <Container />
		</div>
	);

};

//========== EXPORT ==========//

// App

export default App;
