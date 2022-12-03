import {
  GETPRODUCT,
  GETSINGLEPRODUCT,
  GETPRODUCTBYSEARCH,
  START_LOADING,
  END_LOADING,
  GETDESIGNCODE,
  GET_VIEW_DESIGN,
  GET_SINGLE_DESIGN,
  DEL_PRODUCT,
  GETSIZEDE,
  GETSIZE,
  GETTYPE,
  GET_PRODUCT_CATEGORY,
  GET_ADD_DESIGN,
  GETFABRICTYPE,
  GET_ADD_IMPORT,
  DEL_DESIGN,
  EDIT_DESIGN_SIZE,
  EDIT_DESIGN_DETAIL,
} from "../constants/actionTypes";

import {
  getAddDesign,
  getDesignCode,
  getProductCategory,
  getSize,
  getSizeDe,
  getType,
  getViewDesign,
  getProduct,
  Delproduct,
  getFabricType,
  getAddImport,
  getSingleDesign,
  getSingleProduct,
  Deldesign,
  editDesignSize,
  editDesignDetail,
} from "../Api";
import { async } from "@firebase/util";

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

export const GetProduct = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await getProduct(page);

    dispatch({ type: GETPRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetFabricType = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getFabricType();
    dispatch({ type: GETFABRICTYPE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetAddImport = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getAddImport();
    dispatch({ type: GET_ADD_IMPORT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const GetSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getSingleProduct(id);
    dispatch({ type: GET_SINGLE_DESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {}
};

export const GetSingleDesign = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getSingleDesign(id);
    console.log(data);
    dispatch({ type: GET_SINGLE_DESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {}
};

export const DelProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await Delproduct(id);
    dispatch({ type: DEL_PRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {}
};

export const DelDesign = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await Deldesign(id);
    dispatch({ type: DEL_DESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {}
};

export const EditDesignSize = (editdata) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await editDesignSize(editdata);

    dispatch({ type: EDIT_DESIGN_SIZE, payload: data });
    dispatch(GetSingleDesign(editdata[1]));
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
export const EditDesignDetail = (editdata) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await editDesignDetail(editdata);

    dispatch({ type: EDIT_DESIGN_DETAIL, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
