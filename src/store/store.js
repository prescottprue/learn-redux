import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { reduxReactFirebase } from 'redux-firebasev3';

// import the root reducer
import rootReducer from '../reducers/index';

import comments from '../config/comments';
import posts from '../config/posts';

//Firebase configuration details
import { Firebase_Config } from '../config/config';

// create an object for the defaukt data
const defaultState = {
  posts,
  comments
};

// Setup store to be aware by redux dev Tools in chrome
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => (f)
);

// Preconfigure firebase store
const createStoreWithFirebase = compose(
    reduxReactFirebase(Firebase_Config, { userProfile: 'users' })
)(createStore);

// Create firebase store
const store = createStoreWithFirebase( rootReducer, defaultState, enhancers );

//const store = createStore( rootReducer, defaultState, enhancers );

export const history = syncHistoryWithStore(browserHistory, store);

// Hot reload reducers. Any time an ammendment is made to either comments.js or posts,.js reducer
// the site will now be autoreloaded. The ./reducers/index(.js) is being called because it is the main reducer
// which combines all other reducers, in this case comments and posts
if(module.hot) {
  module.hot.accept('../reducers/',() => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
