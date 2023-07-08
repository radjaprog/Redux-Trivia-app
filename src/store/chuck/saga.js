import { put, call, takeLatest } from "redux-saga/effects";
import chuckService from "../../services/ChuckService";
import { performGetRandomJoke, setRandomJoke } from "./slice";
import { performGetJokeCategories, setCategories } from "./slice";

function* getRandomJoke({ payload: category }) {
  try {
    const { value } = yield call(chuckService.getRandomJoke, category);
    yield put(setRandomJoke(value));
  } catch (error) {
    console.log(error);
  }
}

function* getJokeCategories() {
  try {
    const categories = yield call(chuckService.getJokeCategories);
    yield put(setCategories(categories));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetRandomJoke() {
  yield takeLatest(performGetRandomJoke.type, getRandomJoke);
}

export function* watchGetJokeCategories() {
  yield takeLatest(performGetJokeCategories.type, getJokeCategories);
}

// redux trivia
