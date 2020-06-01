import React from "react";
import {geolocated} from "react-geolocated";

class Location extends React.Component {

  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }


  componentDidMount() {

    this.getMyLocation()
  }


  render() {
    return (
      <div className="Location">
      
        <h1>Using geolocation JavaScript API in React {this.state.latitude} </h1>
      </div>
    );
  }
}


export default Location;









