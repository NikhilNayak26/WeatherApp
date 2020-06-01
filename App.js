import React from 'react';
import './App.css';
import Weather from "./components/Weather/Weather";
import Bengaluru from "./components/Bengaluru/Bengaluru";
import Time from "./components/Time/Time";
import Location from "./components/Location/Location";
import Home from './components/Home';
import Example from './components/Example';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
function App() {
 return (

<BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/example" component={Example}/>
             <Route path="/weather/weather" component={Weather}/>
             <Route path="/bengaluru/bengaluru" component={Bengaluru}/>

             
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

   /*<div className="App">
     <header className="header">
     <Logo />
     <h1>React Weather App</h1>
   </header>
     <main className="main">
        <Forecast />
       <Time />
       <Location /> 
     </main>
     <footer className="footer">
       Nikhil's app
     </footer>
   </div>*/
 );
}
export default App;
