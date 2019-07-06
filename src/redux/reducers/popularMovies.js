import Http_Client from '../../services/http_client';

export function loadPopularMoviesSuccess(payload) {
    return {
        type: 'LOAD_POPUAR_MOVIES',
        payload: payload
    };
}

export function loadPopularMovies(page) {
    return function(dispatch) {
        return Http_Client.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(function(response) {
                dispatch(loadPopularMoviesSuccess(response.data));
            });
    }
}

let popularMovies = function(state={}, action) {
    let new_state;

    switch(action.type) {
        case 'LOAD_POPUAR_MOVIES':
            new_state = {};

            new_state[action.payload.page] = action.payload.results;

            return {...state, ...new_state};
        default:
            return state;
    }
}

export default popularMovies;