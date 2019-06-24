import React, { Component } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Title from "./Title";
const axios = require("axios");

class ViewRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      deleteRecord: ""
    };
  }
  componentDidMount() {
    axios
      .get("/CrudController/view_record")
      .then(response => {
        // console.log(response.data);
        const responseData = response.data;
        this.setState({
          records: responseData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeDelete = e => {
    this.setState({
      deleteRecord: e.target.name
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    var Formdata = {
      deleteRecord: this.state.deleteRecord
    };

    axios.post(`/CrudController/delete_record`, { Formdata }).then(res => {
      console.log(res.data);
      console.log(res);
      window.location.reload();
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"View Records"} />
          {/* {this.state.records.map(_record => (
            <li key={_record.id}>{_record.name}</li>
          ))} */}
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
              {this.state.records.map(allRecords => (
                <tr key={allRecords.id}>
                  <th scope="row" key={allRecords.id}>
                    {allRecords.id}
                  </th>
                  <td key={allRecords.name}>{allRecords.name}</td>
                  <td key={allRecords.email}>{allRecords.email}</td>
                  <td>
                    <button className="btn btn-outline-primary">
                      {" "}
                      <Link to={"/edit/" + allRecords.id}> Edit</Link>
                    </button>{" "}
                    <form onSubmit={this.handleSubmit}>
                      <button
                        name={allRecords.id}
                        onClick={this.handleChangeDelete}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ViewRecord;
