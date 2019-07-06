import Http_Client from '../../services/http_client';

export function searchMovieSuccess(payload) {
    return {
        type: 'SEARCH_MOVIE',
        payload: payload
    }
}

export function searchMovie(query, page) {
    return function(dispatch) {
        return Http_Client.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`)
            .then(function(response) {
                dispatch(searchMovieSuccess(response.data));
            });
    }
}

let movieSearch = function(state={}, action) {
    let new_state;

    switch(action.type) {
        case 'SEARCH_MOVIE':
            new_state = {};
        
            new_state[action.payload.page] = action.payload.results;

            return {...state, ...new_state};
        default:
            return state;
    }
}

export default movieSearch;