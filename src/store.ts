// src/store.ts
import { configureStore } from '@reduxjs/toolkit';

// Import your slices here
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
