import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import ChuckReducer from "./chuck/slice";
import TriviaReducer from "./trivia/slice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    chuck: ChuckReducer,
    trivia: TriviaReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
