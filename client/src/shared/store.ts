import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { TodoState } from '../features/todo/model/todoSlice';

const saveState = (state: TodoState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  saveState(state.todos);
  return result;
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;