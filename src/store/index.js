import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
