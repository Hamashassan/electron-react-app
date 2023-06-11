import { combineReducers } from 'redux';

const initialState = {
  teams: [],
  participants: [],
};

const teamsReducer = (state = initialState.teams, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return [...state, action.payload];
    default:
      return state;
  }
};

const participantsReducer = (state = initialState.participants, action) => {
  switch (action.type) {
    case 'ADD_PARTICIPANT':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  teams: teamsReducer,
  participants: participantsReducer,
});

export default rootReducer;
