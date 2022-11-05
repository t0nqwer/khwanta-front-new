import { getSizeDe, getSize } from "../Api";
import { GETSIZEDE, GETSIZE } from "../constants/actionTypes";

export const GetSize = (Size) => async (dispatch) => {
  try {
    const { data } = await getSize(Size);

    dispatch({ type: GETSIZE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const GetSizeDe = (SizeDe) => async (dispatch) => {
  try {
    const { data } = await getSizeDe(SizeDe);
    dispatch({ type: GETSIZEDE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
