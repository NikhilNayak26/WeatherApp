import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div>
         <NavLink to="/">Home</NavLink> <br />
         <NavLink to="/about">About</NavLink> <br />
         <NavLink to="/weather/weather">Weather</NavLink> <br />
         <NavLink to="/bengaluru/bengaluru">Weather bangalore </NavLink>
         
      </div>
   );
}

export default Navigation;