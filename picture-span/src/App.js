//========== IMPORT ==========//
/*
		React
*/
import React from "react";
/*
		COMPONENTS
*/
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";

const App = () => (
  <div className="container-fluid">
    <Navbar />
    <Jumbotron />
    <Panel />
  </div>
);

export default App;
