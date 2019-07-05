import { createStore, applyMiddleware, compose} from 'redux';
import thunk                                    from 'redux-thunk';

import rootReducer                              from './rootReducer';
import { loadPopular }                          from './reducers/popular';

let store;

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(loadPopular());

export default store;