export default function reducer(state = [], action) {
  let huskyId = 0;
  let i = 0;
  let huskyArr = [];
  switch (action.type) {
    case "createdHusky":
      while (i < action.payload.num) {
        huskyArr.push({ id: ++huskyId, brushedParts: [] });
        i++;
      }
      state.push(...huskyArr);
      return state;

    case "huskyBrushed":
      for (let x = 0; x < state.length; x++) {
        if (state[x].id === action.payload.id) {
          state[x].brushedParts.push(action.payload.part);
        }
      }
      return state;
    case "huskyShook":
      console.log(action.payload.id);
      for (let y = 0; y < state.length; y++) {
        if (state[y].id === action.payload.id) {
          state[y].brushedParts = [];
        }
      }
    //   return state;

    default:
      return state;
  }
}
