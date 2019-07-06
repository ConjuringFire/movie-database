import { combineReducers }          from 'redux';
import Reducer_PopularMovies        from './reducers/popularMovies';
import Reducer_Movies               from './reducers/movies';
import Reducer_SearchMovies         from './reducers/search';

const rootReducer = combineReducers({
    movies:         Reducer_Movies,
    popularMovies:  Reducer_PopularMovies,
    search:         Reducer_SearchMovies
});

export default rootReducer;