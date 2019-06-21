import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
import ViewFrom from "./component/ViewRecord";
import Error404 from "./component/Error404";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={ViewFrom} />
          <Route path="/Edit/:slug" component={EditForm} />
          <Route path="/Add" component={AddForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
