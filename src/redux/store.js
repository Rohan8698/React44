import { applyMiddleware, }from "redux";
import PaniPuriReducer from "./cakeexample/cakeReducer";
import logger from "redux-logger";

const store = (PanipuriReducer , applyMiddleware(logger));
export default store;