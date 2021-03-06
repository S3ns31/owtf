/*
 * SessionReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable'; // combineReducers of 'redux' doesn't work with immutable.js

import {
  CHANGE_SESSION,
  CHANGE_SESSION_SUCCESS,
  CHANGE_SESSION_ERROR,
  LOAD_SESSIONS,
  LOAD_SESSIONS_SUCCESS,
  LOAD_SESSIONS_ERROR,
} from './constants';

// The initial state of the session change
const initialChangeState = fromJS({
  loading: false,
  error: false,
  currentSession: fromJS({ id: 1, name: 'default session' }),
});

function sessionChangeReducer(state = initialChangeState, action) {
  switch (action.type) {
    case CHANGE_SESSION:
      return state
        .set('loading', true)
        .set('error', false)
        .set('currentSession', false);
    case CHANGE_SESSION_SUCCESS:
      return state
        .set('loading', false)
        .set('currentSession', action.session);
    case CHANGE_SESSION_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

// The initial state of the sessions.
const initialSessionState = fromJS({
  loading: false,
  error: false,
  sessions: false,
});

function sessionsLoadReducer(state = initialSessionState, action) {
  switch (action.type) {
    case LOAD_SESSIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('sessions', false);
    case LOAD_SESSIONS_SUCCESS:
      return state
        .set('loading', false)
        .set('sessions', action.sessions);
    case LOAD_SESSIONS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default combineReducers({
  change: sessionChangeReducer,
  load: sessionsLoadReducer,
});
