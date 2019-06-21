import React, { Component } from "react";
import Header from "../Header";
import AddForm from "./AddForm";
import ViewRecord from "./ViewRecord";
class RootComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <main role="main" className="container">
          <div className="starter-template">
            <AddForm />
            <ViewRecord />
          </div>
        </main>
      </>
    );
  }
}

export default RootComponent;
