import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer, { changeSomeValue } from './user';
import anotherReducer from './user';

const rootReducer = combineReducers({
    userReducer,
    anotherReducer
});

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools()
);

store.dispatch(changeSomeValue('Some string'));

export default store;
