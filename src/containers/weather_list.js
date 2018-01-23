import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{

    displayWheater(){
        return this.props.weather.map(record=>{
            return(
                <tr key="">
                    <td>{record.city.name}</td>
                    <td>{record.list[0].main.temp}</td>
                    <td>{record.list[0].main.pressure}</td>
                    <td>{record.list[0].main.humidity}</td>
                </tr>
            )
        })
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
                    {this.displayWheater()}
                </tbody>
            </table>
        )
    };
}

function mapStateToProps({weather}){        //get weather prop form state obj argument
    return {weather};                  
}

export default connect(mapStateToProps)(WeatherList);