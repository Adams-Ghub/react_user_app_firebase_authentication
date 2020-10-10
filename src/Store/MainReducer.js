import UserReducer from './UserReducer'

import {firebaseReducer} from 'react-redux-firebase';
import {combineReducers} from 'redux';

export default combineReducers({
    usersState: UserReducer,
    firebase: firebaseReducer,
})