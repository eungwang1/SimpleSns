import { combineReducers } from '@reduxjs/toolkit';
import postSlice from './postSlice';

const rootReducer = combineReducers({ postSlice });

export default rootReducer;
