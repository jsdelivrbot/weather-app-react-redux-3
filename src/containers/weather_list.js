import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = _.map( cityData.list.map(rec=> rec.main.temp), t=>t-273);
        const pressures = cityData.list.map(rec=> rec.main.pressure);
        const humidities = cityData.list.map(rec=> rec.main.humidity);
        const {lon, lat} = cityData.city.coord;
        

        return(
            <tr key={name}>
                <td> <GoogleMap lat={lat} lon={lon}/> </td>
                <td>{<Chart data={temps} color="orange" units="C"/>}</td>
                <td>{<Chart data={pressures} color="blue" units="hPa"/>}</td>
                <td>{<Chart data={humidities} color="black" units="%"/>}</td>
            </tr>
        )
    }

    render(){  
        console.log(this.props.weather);
          
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Presure (hpa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    };
}

function mapStateToProps({weather}){        //get weather prop form state obj argument
    return {weather};                  
}

export default connect(mapStateToProps)(WeatherList);