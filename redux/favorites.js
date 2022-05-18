
import * as ActionTypes from './ActionTypes';

export const favorites = (state = [],  action) => {
    switch(action.types) {
        case ActionTypes.ADD_FAVORITES:
            if( state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);
            
            default:
                return state;
        }
};