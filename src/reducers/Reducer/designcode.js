import { GET_ADD_DESIGN, START_LOADING, END_LOADING } from "../../constants/actionTypes";

export default (
  state = {
    isLoading: true,
    brand: [],
    category: [],
    Sizename: [],
    pattern: [],
    SizeDe: [],
    DesignCode: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ADD_DESIGN:
      console.log(action.payload);
      return {
        ...state,
        brand: action.payload[0],
        category: action.payload[1],
        Sizename: action.payload[2],
        pattern: action.payload[3],
        SizeDe: action.payload[4],
        DesignCode: action.payload[5],
      };
    default:
      return state;
  }
};
