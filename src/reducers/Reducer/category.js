import { END_LOADING, GET_PRODUCT_CATEGORY, START_LOADING } from "../../constants/actionTypes";

export default (state = { isLoading: true, category: [], ProCategory: [], Prodata: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_PRODUCT_CATEGORY:
      return { ...state, ProCategory: action.payload[0], Prodata: action.payload[1] };
  }
  return state;
};
