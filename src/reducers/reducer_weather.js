import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:
            //we must not alter the state in Redux, eg: state.push(data)
            //reducesrs should return new state

            //concat doe not atlter
            //return state.concat([ action.payload.data ]);    

            //create a new array, instead mutated id
            return [action.payload.data, ...state];   
    }

    return state;
    
}