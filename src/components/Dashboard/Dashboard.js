import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };
    this.getAllHouses = this.getAllHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this)
  }
  componentDidMount() {
    this.getAllHouses();
  }

  getAllHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses: res.data
      });
      // this.getAllHouses()
    });
  }

  render() {
    const { houses } = this.state;

    const mappedHouses = houses.map(house => {
      return (
        <div key={house.id}>
          <House house={house} deleteHouse={this.deleteHouse} />
        </div>
      );
    });
    return (
      <div className="dashboard">
        <div className="top">
          <h1>Dashboard</h1>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
          
          
        </div>

        <h3> Home Listings</h3>
        <div className="houses">{mappedHouses}</div>
      </div>
    );
  }
}
