import store from "./store/store";

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
console.log(store.getState());
