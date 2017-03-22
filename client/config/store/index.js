import 'babel-polyfill';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootDuck from './ducks';
import rootSaga from './sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootDuck,
    initialState,
    compose(
      // do not add middlware before saga...
      applyMiddleware(sagaMiddleware),
      // Add other middleware on this line...
      window.devToolsExtension ? window.devToolsExtension() : f => f //add support for Redux dev tools
    )
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ducks', () => {
      const nextReducer = require('./ducks').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
