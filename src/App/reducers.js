import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as gomugomReducers from '../gomugom/reducers';
import * as arusnatimoReducers from '../Arusantimo/reducers';

export default combineReducers({
    routing: routerReducer,
    ...gomugomReducers,
    ...arusnatimoReducers,
});
