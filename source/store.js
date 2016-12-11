import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducer';

const logger = createLogger({ collapsed: true });

const enhancer = compose(
  applyMiddleware(
    thunk,
    logger,
  ),
);

const store = createStore(reducers, {}, enhancer);

export default store;
