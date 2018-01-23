import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = cityData.list.map(rec=> rec.main.temp);
        

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temps} height={120} width={180}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
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
                        <th>Temperature</th>
                        <th>Presure</th>
                        <th>Humidity</th>
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