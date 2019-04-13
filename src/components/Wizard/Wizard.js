import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }

  addHouse = () => {
    const { name, address, city, state, zipcode } = this.state;
    const payload = {
      name,
      address,
      city,
      state,
      zipcode
    };
    axios.post("api/houses", payload).then(() => {
      this.clearForm();
      this.props.history.push("/");
    });
  };

  clearForm = () => {
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    });
  };

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
          <br />

          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
