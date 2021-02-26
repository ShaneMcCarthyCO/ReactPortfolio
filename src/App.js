import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/Contact";
import Technologies from "./components/pages/Technologies";
import Nav from "./components/pages/Nav";

function App() {
  return (
 <Router>
   <Nav/>
   <Switch>
     <Route exact path="/Home"component={Home}/>  
     <Route exact path="/About"component={About}/>   
     <Route exact path="/Contact"component={Contact}/> 
     <Route exact path="/Technologies"component={Technologies}/> 
     <Route exact path="/Portfolio"component={Portfolio}/>  
    </Switch>
 </Router>   
  );
}

export default App;
