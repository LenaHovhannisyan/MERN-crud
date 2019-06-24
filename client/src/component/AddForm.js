import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Title from "./Title";
const axios = require("axios");

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      fireRedirect: false
    };
  }

  handleChangeName = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangePassword = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      fireRedirect: true
    });

    const Formdata = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`CrudController/add_record`, { Formdata }).then(res => {
      if (res.status === 404) {
        console.log(res.statusText + "-" + res.status);
      } else if (res.status === "500") {
        console.log(res.statusText + "-" + res.status);
      } else if (res.status === 200) {
        console.log(res.statusText + "-" + res.status);
      }
    });
  };
  render() {
    const { fireRedirect } = this.state;
    return (
      <>
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"Add Records"} />
          <form onSubmit={this.handleSubmit}>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label className="sr-only">Full Name</label>
                <input
                  onChange={this.handleChangeName}
                  type="text"
                  name="fullname"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Full Name"
                />
              </div>

              <div className="col-auto">
                <label className="sr-only">Username/Email</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    onChange={this.handleChangeEmail}
                    name="email"
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Username/Email"
                  />
                </div>
              </div>
              <div className="col-auto">
                <label className="sr-only">Password</label>
                <input
                  onChange={this.handleChangePassword}
                  name="password"
                  type="password"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="Password"
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Save
                </button>
              </div>
            </div>
          </form>
          {fireRedirect && <Redirect to={"/"} />}
        </div>
      </>
    );
  }
}

export default AddForm;
