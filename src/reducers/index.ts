import { combineReducers } from 'redux';
import { actorsDataReducer } from '../slices/actors'

const rootReducer = combineReducers({
  actorsData: actorsDataReducer
});

export type RootStore = ReturnType<typeof rootReducer>;

export default rootReducer;
