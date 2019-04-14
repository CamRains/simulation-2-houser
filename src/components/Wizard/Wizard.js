import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
// import axios from "axios";

class Wizard extends Component {
  // moved to step one component
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipcode: 0
  //   };
  // }

  // addHouse = () => {
  //   const { name, address, city, state, zipcode } = this.state;
  //   const payload = {
  //     name,
  //     address,
  //     city,
  //     state,
  //     zipcode
  //   };
  //   axios.post("api/houses", payload).then(() => {
  //     this.clearForm();
  //     this.props.history.push("/");
  //   });
  // };

  // clearForm = () => {
  //   this.setState({
  //     name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zipcode: 0
  //   });
  // };

  render() {
    return (
      <div>
        <div className="top-form">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>

        <div className="steps">
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
        </div>
      </div>
    );
  }
}

export default Wizard;
