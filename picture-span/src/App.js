//========== IMPORT ==========//

// React

import React from "react";

// Components

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";

//========== CLASS ==========//

// App 

class App extends React.Component {

	this.state = {
			images: {
				image1 {
					url: "https://www.what-dog.net/Images/faces2/scroll001.jpg",
					clicked: false
				},
				image1 {
					url: "blah",
					clicked: true
				}
			}
		};


	// constructor(){
	// 	//allows method to refer back to component as this
	// 	super();

	// 	this.clickImage = this.clickImage.bind(this);

	// 	//initial state
	// 	this.state = {
	// 		images: {},
	// 		order: {}
	// 	}

	// }

	// // clickImage = (image) => {
	// // 	//make copy of current state and spread it into new object
	// // 	const images = {...this.state.images};

	// // 	const timestamp = Date.now();


	// // }




	//render
	render = () => (
		<div className="container-fluid">
		  <Navbar />
		  <Jumbotron />
		  <Container clickImage={this.clickImage}/>
		</div>
	);

};

//========== EXPORT ==========//

// App

export default App;
