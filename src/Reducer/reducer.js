import { SEARCH } from "../Action/action";

export const initialState = { search: "", loading: false };
function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };

    default:
      return state;
  }
}
export default reducer;
