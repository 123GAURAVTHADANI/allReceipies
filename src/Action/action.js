import axios from "axios";
import { debounce } from "../Utils/debounce";

export const SEARCH = "SEARCH1";
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";


export const inputSearch = (payload) => {
  return {
    type: SEARCH,
    payload,
  };
};
// thunk function
export const fetchData = (search) => {
  return async function (dispatch) {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/menuItems/search?query=${search}`,
        {
          headers: {
            "x-api-key": "49a907df309e42bb898f2dc9a17bd16c",
          },
        }
      );
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: FETCH_DATA_ERROR, payload: err.message });
    }
  };
};
const handleFnc = (search, dispatch) => {
  dispatch(fetchData(search));
};

export const debounceFunction = debounce(handleFnc, 2000);
