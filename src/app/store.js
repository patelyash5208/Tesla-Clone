import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/car/menu';
import burgerReducer from '../features/car/BergurMenu';


export const store = configureStore({
  reducer: {
    menu : menuReducer,
    burger : burgerReducer
  },
});
