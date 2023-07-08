import * as chuckSagas from "./chuck/saga";
import * as triviaSagas from "./trivia/saga";

const sagas = {
  ...chuckSagas,
  ...triviaSagas,
};

export default sagas;
