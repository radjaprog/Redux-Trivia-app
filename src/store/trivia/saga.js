import { put, call, takeLatest } from "redux-saga/effects";
import triviaService from "../../services/TriviaService";
import {
  performGetCategories,
  performGetCluesByCategory,
  performGetRandomClue,
  setCategories,
  setClues,
} from "./slice";

function* getRandomClue() {
  try {
    const clues = yield call(triviaService.getRandomClue);
    yield put(setClues(clues));
  } catch (error) {
    console.log(error);
  }
}

function* getCategories() {
  try {
    const categories = yield call(triviaService.getCategories);
    yield put(setCategories(categories));
  } catch (error) {
    console.log(error);
  }
}

function* getCluesByCategory({ payload }) {
  // pre promene zbog paginacije payload: categoryId
  const { categoryId, page } = payload; // dodato zbog paginacije

  try {
    const cluesByCategory = yield call(
      triviaService.getCluesByCategory,
      categoryId,
      page
    );
    yield put(setClues(cluesByCategory));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetRandomClue() {
  yield takeLatest(performGetRandomClue.type, getRandomClue);
}

export function* watchGetCategories() {
  yield takeLatest(performGetCategories.type, getCategories);
}

export function* watchGetCluesByCategory() {
  yield takeLatest(performGetCluesByCategory.type, getCluesByCategory);
}
