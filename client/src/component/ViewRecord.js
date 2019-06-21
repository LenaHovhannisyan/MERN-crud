import React, { Component } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Title from "./Title";
const axios = require("axios");

class ViewRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"View Records"} />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn btn-outline-primary">
                    {" "}
                    <Link to="/edit/1"> Edit</Link>
                  </button>{" "}
                  | <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>test</td>
                <td>dddd</td>
                <td>
                  <button className="btn btn-outline-primary">
                    <Link to="/edit/1"> Edit</Link>
                  </button>{" "}
                  | <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ViewRecord;
