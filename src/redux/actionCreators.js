import Http_Client from '../../services/http_client';

export function loadPopularMoviesSuccess(payload) {
    return {
        type: 'LOAD_POPUAR_MOVIES',
        payload: payload
    };
}

export function loadPopularMedia(type, page) {
    return function(dispatch) {
        if (type === 'movie') {
            return Http_Client.get('/movie/popular?api_key=' + process.env.REACT_APP_API_KEY + '&page=' + page)
            .then(function(response) {
                dispatch(loadPopularMoviesSuccess(response.data.items));
            });
        }
    }
}