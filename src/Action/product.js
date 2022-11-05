import {
  ADDPRODUCT,
  GETPRODUCT,
  GETSINGLEPRODUCT,
  GETPRODUCTBYSEARCH,
  ADDDESIGN,
  START_LOADING,
  END_LOADING,
  GETDESIGNCODE,
  ADD_KHWANTA_PRODUCT,
  GET_VIEW_DESIGN,
  GET_SINGLE_DESIGN,
  DEL_PRODUCT,
  GETSIZEDE,
  GETSIZE,
  GETTYPE,
  GET_PRODUCT_CATEGORY,
  GET_ADD_DESIGN,
} from "../constants/actionTypes";

import {
  getAddDesign,
  getDesignCode,
  getProductCategory,
  getSize,
  getSizeDe,
  getType,
  getViewDesign,
} from "../Api";

export const GetDesignCode = (product) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getDesignCode();
    dispatch({ type: GETDESIGNCODE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

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

export const GetType = (newType) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getType(newType);
    dispatch({ type: GETTYPE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
export const GetProCategory = (newType) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getProductCategory(newType);
    dispatch({ type: GET_PRODUCT_CATEGORY, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetAddDesign = (newType) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getAddDesign(newType);
    dispatch({ type: GET_ADD_DESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetviewDesign = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getViewDesign(page);
    dispatch({ type: GET_VIEW_DESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};