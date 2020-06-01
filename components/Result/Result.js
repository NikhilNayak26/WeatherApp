import React from 'react';
import classes from './Result.css'

const result = (props) => {
    var x=props.min;
    var y=props.max;
    var z=props.speed;
    var p,q,r;
   
        if(z%2)
        {
            r=true;
        }
        else r=false;
        if(x%2)
        {
            p=true;
        }
        else p=false;
        if(y%2)
        {
            q=true;
        }
        else q=false;
    return (
        <div className={classes.Wrapper}>
            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <div>Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div >
                    <p><strong>{props.responseObj.name}</strong></p>
                    {p &&  <p>Min Temperature: {props.responseObj.main.temp_min} degrees </p>}
                    {q &&  <p>Max Temperature: {props.responseObj.main.temp_max} degrees </p>}
                    {r &&  <p>Wind speed: {props.responseObj.visibility.speed} kmph </p>}
                    
                    <p>Temperature: {Math.round(props.responseObj.main.temp)} degrees </p>

                    <p>Humidity: {Math.round(props.responseObj.main.humidity)} percent </p>

                    <p>Pressure: {Math.round(props.responseObj.main.pressure)} bar </p>

                    <p>Description: {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default result;
