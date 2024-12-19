import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../Action/action";

// loading : false , error:null , data:[]
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default dataReducer;
