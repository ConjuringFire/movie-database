import Http_Client from '../../services/http_client';

export function loadMoviesSuccess(payload) {
    return {
        type: 'LOAD_MOVIES',
        payload: payload
    }
}

export function loadPopularMovies(page=1) {
    return function(dispatch) {
        return Http_Client.get('/movie/popular?api_key=' + process.env.REACT_APP_API_KEY + '&page=' + page)
            .then(function(response) {
                dispatch(loadMoviesSuccess(response.data.results));
            });
    }
}

let movies = function(state={}, action) {
    let new_state;

    switch(action.type) {
        case 'LOAD_MOVIES':
            new_state = {};
            action.payload.map((movie) => new_state[movie.id] = movie);

            return new_state;
        default:
            return state;
    }
}

export default movies;