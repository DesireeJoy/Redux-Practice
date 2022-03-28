export default function reducer(state = [{ huskies: [] }], action) {
  let huskyId = 0;
  let i = 0;
  let huskyArr = [];
  switch (action.type) {
    case "createdHusky":
      while (i < action.payload.num) {
        huskyArr.push({ id: ++huskyId, brushedParts: [] });
        i++;
      }
      state[0].huskies.push(...huskyArr);
      return state;

    case "huskyBrushed":
      for (let x = 0; x < state[0].huskies.length; x++) {
        if (state[0].huskies[x].id === action.payload.id) {
          state[0].huskies[x].brushedParts.push(action.payload.part);
        }
      }
      return state;
    case "huskyShook":
      console.log(action.payload.id);
      for (let y = 0; y < state[0].huskies.length; y++) {
        if (state[0].huskies[y].id === action.payload.id) {
          state[0].huskies[y].brushedParts = [];
        }
      }
      return state;
    case "gameCreated":
      state.push({
        game: { height: action.payload.height, width: action.payload.width },
      });
      return state;

    default:
      return state;
  }
}
