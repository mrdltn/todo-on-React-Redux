import { combineReducers } from 'redux';
import { todos } from './reducers/todos-reducer';

export const rootReducer = combineReducers({
    todos,
});
