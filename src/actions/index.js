import axios from 'axios';

const API_KEY = 'd472f8c4d1fa72d2c6b98daa9023db63';

const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//var helps keep this string same/consistent here in the action and in the reducer.
//don't have to copy past strings between files.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${root_url}&q=${city},ie`;

    //make http request, returns promise.
    const request = axios.get(url); 
    

    return {
        type: FETCH_WEATHER,
        //if the payload is a promise, Redux-Promise midleware stops the action
        //after prom resolves,Redux-Promise creates a new action and sends it to reducers
        payload:request            
    }
}