import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateFinancialInfo } from "../redux/reducer";

class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mortgage: 0,
      rent: 0
    };
    this.addHouse = this.addHouse.bind(this);
  }
  addHouse = () => {
    const { mortgage, rent } = this.state;
    let newHouse = {
      mortgage,
      rent
    };
    axios.post("api/houses", newHouse).then(response => {
      //   this.clearForm();
      //   this.props.history.push("/");
    });
  };

  //   clearForm = () => {
  //     this.setState({
  //       name: "",
  //       address: "",
  //       city: "",
  //       state: "",
  //       zipcode: 0
  //     });
  //   };
  render() {
    const { mortgage, rent } = this.state;
    return (
      <div>
        <div className="input-info">
          <h4>Mortgage Amount:</h4>
          <input
            value={mortgage}
            onChange={event => this.setState({ mortgage: event.target.value })}
          />
          <h4>Desired Monthly Rent:</h4>
          <input
            value={rent}
            onChange={event => this.setState({ rent: event.target.value })}
          />
        </div>

        <br />
        <div className="step3-buttons">
          <Link to="/wizard/step2">
            <button onClick={event => updateFinancialInfo(event.target.value)}>
              Previous Step
            </button>
          </Link>
          <Link to="/">
            <button onClick={this.addHouse}>Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const {
    name,
    address,
    city,
    state,
    zipcode,
    img,
    mortgage,
    rent
  } = reduxState;
  return {
    name,
    address,
    city,
    state,
    zipcode,
    img,
    mortgage,
    rent
  };
}

export default connect(
  mapStateToProps,
  { updateFinancialInfo }
)(StepThree);
