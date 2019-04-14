import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import {connect} from 'react-redux'
import {updatePropertyInfo} from '../redux/store'



class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }

  // moved to step three
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
  //     name: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipcode: 0
  //   });
  // };
  render() {
    const { name, address, city, state, zipcode } = this.state;
    return (
      <div>
        <div className="input-info">
          <h4>Property Name</h4>
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <h4>Address</h4>
          <input
            value={address}
            onChange={e => this.setState({ address: e.target.value })}
          />
          <h4>City</h4>
          <input
            value={city}
            on
            Change={e => this.setState({ city: e.target.value })}
          />
          <h4>State</h4>
          <input
            value={state}
            on
            Change={e => this.setState({ state: e.target.value })}
          />
          <h4>Zipcode</h4>
          <input
            value={zipcode}
            on
            Change={e => this.setState({ zipcode: e.target.value })}
          />
        </div>

        <div className="step1-button">
          <Link to="/wizard/step2">
            <button onClick={(event) => updatePropertyInfo(event.target.value)}>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}





function mapStateToProps(reduxState) {
    const { name, address, city, state, zipcode} = reduxState;
    return {
        name,address,city,state,zipcode
    }
}


export default connect(mapStateToProps, {updatePropertyInfo})(StepOne);
