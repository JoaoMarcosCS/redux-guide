//O store o ponto de união de todos os reducers, sagas e persistors

import {createStore} from "redux";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export default store