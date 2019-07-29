import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import createRootReducer from '../data/reducers';
import rootSaga from '../data/sagas';

export default function configureStore(initialState = {}) {
  const history = createBrowserHistory();

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(thunkMiddleware, sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return { store, history };
}
