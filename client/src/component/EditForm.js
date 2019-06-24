import React, { Component } from "react";
import Title from "./Title";
class EditForm extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ paddingTop: "60px", paddingLeft: "50px" }}>
          <Title title={"Edit Form"} />
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label className="sr-only">Full Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                />
              </div>

              <div className="col-auto">
                <label className="sr-only">Username/Email</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
              <div className="col-auto">
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  id="inlineFormInput"
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditForm;
