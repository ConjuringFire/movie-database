import Http_Client from '../../services/http_client';

export function loadPopularSuccess(payload) {
    return {
        type: 'LOAD_POPULAR',
        payload: payload
    };
}

export function loadPopular() {
    return function(dispatch) {
        return Http_Client.get('/movie/popular?api_key=' + process.env.REACT_APP_API_KEY)
            .then(function(response) {
                dispatch(loadPopularSuccess(response.data.results));
            });
    }
}

let popular = function(state={}, action) {
    let new_state

    switch (action.type) {
        case 'LOAD_POPULAR':
            new_state = {};
            action.payload.map((movie) => new_state[movie.id] = movie);

            return new_state;
        default:
            return state;
    }
}

export default popular;