import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./Home";
import Template from "./Template";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={Template} />
        <Route path="/edit" component={Template} />
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
