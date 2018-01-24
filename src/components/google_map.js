import React, { Component } from 'react';

class GoogleMap extends Component{

    //Life cicle method - renders after the component has been rendered
    componentDidMount(){     
        //create an embeded google map
        new google.maps.Map(this.refs.map, {
            zoom: 8, 
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    };

    render(){

        //ref     -  gives us a reference to this html element inside this component class
        //this.refs.map    - select the div
        return <div ref="map"/>
    }
}

export default GoogleMap;