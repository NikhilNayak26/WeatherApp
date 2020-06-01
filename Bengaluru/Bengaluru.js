import classes from './Bengaluru.css';
import React, { useState } from 'react';
import Result from '../Result/Result';
import Time from "../Time/Time";


const Bengaluru = () => {
    

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e) {
        e.preventDefault();
        
        setError(false);
        setResponseObj({});

        setLoading(true);

        

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=Bangalore`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <button type="submit" className={classes.button}>Get Forecast</button>
            </form>
            <div>
                <Result responseObj={responseObj} error={error}
                    loading={loading} />
            </div>
            <div>
            <Time />
            </div>
        </div>
    )
}
export default Bengaluru;