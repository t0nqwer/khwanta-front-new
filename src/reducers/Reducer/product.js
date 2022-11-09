import {
  END_LOADING,
  GETPRODUCT,
  GETPRODUCTBYSEARCH,
  START_LOADING,
  GETDESIGNCODE,
  ADD_KHWANTA_PRODUCT,
  GET_VIEW_DESIGN,
  GET_ADD_IMPORT,
} from "../../constants/actionTypes";

export default (
  state = {
    isLoading: true,
    Prodata: [],
    Design: [],
    Fabric: [],
    page: [],
    Prodata2: [],
    Brand: [],
    Category: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GETPRODUCT:
      return { ...state, Prodata2: action.payload[0], page: action.payload[1] };
    case GETPRODUCTBYSEARCH:
      return action.payload;
    case GETDESIGNCODE:
      return {
        ...state,
        Design: action.payload[0],
        Fabric: action.payload[1],
        Prodata: action.payload[2],
      };
    case GET_VIEW_DESIGN:
      return { ...state, Design: action.payload[0], page: action.payload[1] };
    case GET_ADD_IMPORT:
      return {
        ...state,
        Prodata: action.payload[0],
        Brand: action.payload[1],
        Category: action.payload[2],
      };
    default:
      return state;
  }
};
