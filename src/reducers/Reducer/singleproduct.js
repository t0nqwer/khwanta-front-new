import {
  GETSINGLEPRODUCT,
  GET_SINGLE_DESIGN,
  START_LOADING,
  END_LOADING,
  EDIT_DESIGN_SIZE,
  EDIT_DESIGN_DETAIL,
} from "../../constants/actionTypes";

export default (
  singleproduct = {
    isLoading: true,
    Data: { product_detail_img: [], Front_img: [] },
    Sizede: [],
    Sta: "",
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...singleproduct, isLoading: true };
    case END_LOADING:
      return { ...singleproduct, isLoading: false };
    case GETSINGLEPRODUCT:
      return { ...singleproduct, Data: action.payload[0], Sizede: action.payload[1] };
    case GET_SINGLE_DESIGN:
      return { ...singleproduct, Data: action.payload[0], Sizede: action.payload[1] };
    case EDIT_DESIGN_SIZE:
      console.log(action.payload);
      return { ...singleproduct, Sta: action.payload };
      case EDIT_DESIGN_DETAIL:
        console.log(action.payload);
        return { ...singleproduct, Sta: action.payload };
    default:
      return singleproduct;
  }
};
