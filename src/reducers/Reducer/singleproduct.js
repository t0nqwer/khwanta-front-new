import { GETSINGLEPRODUCT, GET_SINGLE_DESIGN } from "../../constants/actionTypes";

export default (singleproduct = [], action) => {
  switch (action.type) {
    case GETSINGLEPRODUCT:
      return action.payload;
    case GET_SINGLE_DESIGN:
      return action.payload;
    default:
      return singleproduct;
  }
};
