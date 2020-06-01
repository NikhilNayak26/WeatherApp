import React from 'react';
import Map from './Map'

/*const home = () => {
   return (
      <div>
         <h1>Home</h1>
          <p>Home page body content
          Can display temperature,humidity,pressure,maxtemp,mintemp,weather description,speed of wind etc</p>
          <h2>click on forecast for other cities weather</h2>
          <h2>click on forecast bengaluru for our weather</h2>
      </div>
   );
}

export default home;*/

class home extends React.Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 18.5204, lng: 73.8567}}
       height='300px'
       zoom={15}
      />
        )
    }
  }
  export default home;