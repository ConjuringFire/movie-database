import { combineReducers }          from 'redux';
import Reducer_Movies               from './reducers/popularMovies';

const rootReducer = combineReducers({
    movies:    Reducer_Movies
});

export default rootReducer;