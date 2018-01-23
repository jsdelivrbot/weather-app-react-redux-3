import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: ''}

        //bind the class instance to onInput change.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);

        this.setState({term: event.target.value});
    }

    onFromSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);

        this.setState({term:''});  
    }

    render(){
        return(
            <form  onSubmit={this.onFromSubmit}>
                <div className=" input-group">
                    <input 
                        type="text" 
                        onChange={this.onInputChange}
                        value={this.state.term}
                        className="form-control"/>
                    <span className=" input-group-btn">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </span>
                </div>
            </form>
        )
    }
}

function mapDsipatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDsipatchToProps) (SearchBar);