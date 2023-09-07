import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';

// TODO: сделать нормальный reducer и вынести его от сюда
export const rootReducer = combineReducers({
  testReducer: createReducer({ testParam: 0 }, builder => {
    builder.addCase(createAction('test'), (state, action) => {});
  }),
});
