import Http_Client from '../../services/http_client';

export function loadMovieSuccess(payload) {
    return {
        type: 'LOAD_MOVIE',
        payload: payload
    }
}

export function loadMovie(movie_id) {
    return function(dispatch) {
        return Http_Client.get(`/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(function(response) {
                dispatch(loadMovieSuccess(response.data));
            });
    }
}

let movies = function(state={}, action) {
    let new_state;

    switch(action.type) {
        case 'LOAD_MOVIE':
            new_state = {};
            new_state[action.payload.id] = action.payload;
        
            return {
                ...state,
                ...new_state
            };
        default:
            return state;
    }
}

export default movies;