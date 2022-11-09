import { START_LOADING, END_LOADING, GETFABRICTYPE } from "../../constants/actionTypes";

export default (
  state = { weaving: [], fabricType: [], colorTechnique: [], pattern: [], isLoading: true },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GETFABRICTYPE:
      return {
        weaving: action.payload[0],
        fabricType: action.payload[1],
        colorTechnique: action.payload[2],
        pattern: action.payload[3],
        isLoading: false,
      };

    default:
      return state;
  }
};
