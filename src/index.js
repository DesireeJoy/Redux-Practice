import store from "./store/store";
import "./styles/app.scss";

store.dispatch({
  type: "createdHusky",
  payload: {
    num: 3,
  },
});

store.dispatch({
  type: "huskyBrushed",
  payload: {
    id: 2,
    part: "head",
  },
});
store.dispatch({
  type: "huskyBrushed",
  payload: {
    id: 3,
    part: "tail",
  },
});
store.dispatch({
  type: "huskyBrushed",
  payload: {
    id: 1,
    part: "head",
  },
});
store.dispatch({
  type: "huskyBrushed",
  payload: {
    id: 1,
    part: "body",
  },
});
store.dispatch({
  type: "huskyBrushed",
  payload: {
    id: 1,
    part: "tail",
  },
});
store.dispatch({
  type: "huskyShook",
  payload: {
    id: 2,
  },
});
store.dispatch({
  type: "gameCreated",
  payload: {
    height: 5,
    width: 12,
  },
});
console.log(store.getState());
