import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './main/reducer';

const index = configureStore({ reducer: mainReducer });

export default index;
