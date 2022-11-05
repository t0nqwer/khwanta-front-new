import { GETSINGLEPRODUCT, GET_SINGLE_DESIGN, GET_STOCK_BARCODE } from "../../constants/actionTypes";

export default (Stock = [], action) => {
  switch (action.type) {
    case GET_STOCK_BARCODE:
      return action.payload;
    default:
      return Stock;
  }
};
