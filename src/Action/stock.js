import { GET_STOCK_BARCODE } from "../constants/actionTypes";

import { getPrintstockBarcode } from "../Api";

export const GetProductStockBarcode = () => async (dispatch) => {
  try {
    const { data } = await getPrintstockBarcode();
    dispatch({ type: GET_STOCK_BARCODE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
