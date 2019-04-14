import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePropertyImg } from "../redux/reducer";
// import axios from "axios";

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ""
    };
  }
  render() {
    const { img } = this.state;
    return (
      <div>
        <div className="input-info">
          <h4>Image URL:</h4>
          <input
            value={img}
            onChange={(event) => this.setState({ img: event.target.value })}
          />
        </div>

        <br />
        <div className="step2-buttons">
          <Link to="/wizard/step1">
            <button onClick={(event) => updatePropertyImg(event.target.value)}>
              Previous Step
            </button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={(event) => updatePropertyImg(event.target.value)}>
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { img } = reduxState;
  return {
    img
  };
}

export default connect(
  mapStateToProps,
  { updatePropertyImg }
)(StepTwo);
