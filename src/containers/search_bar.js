import React, {Component} from 'react';

export default class SearchBar extends Component{

    render(){
        return(
            <form>
                <div className=" input-group">
                    <input type="text" className=" form-control"/>
                    <span className=" input-group-btn">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </span>
                </div>
            </form>
        )
    }
}