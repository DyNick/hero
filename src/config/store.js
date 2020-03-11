import React from 'react';
import playerReducer from '../player/reducer';
import mapReducer from '../map/reducer'

import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer


});
const store = createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store