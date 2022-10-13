import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactReduser from './contactSlice';
import filterSlice from './filterSlice';

const rootReduser = combineReducers({
  contacts: contactReduser,
  filter: filterSlice,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
