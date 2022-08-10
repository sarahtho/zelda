import React from "react";
import Home from "./Home";
import About from "./About";
import News from "./News";
import {Route, Switch} from "react-router-dom";
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/news" component={News}/>
      <Route component={Home}/> 
    </Switch>
    </>
  );
}

export default App;
