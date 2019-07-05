import { combineReducers }          from 'redux';
import Reducer_Popular              from './reducers/popular';

const rootReducer = combineReducers({
    popular:    Reducer_Popular
});

export default rootReducer;