export function loadPopular() {
    return {
        type: 'LOAD_POPULAR'
    };
}

let popular = function(state={name: 'ben'}, action) {
    switch (action.type) {
        case 'LOAD_POPULAR':
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default popular;