import {
  ADDDESIGN,
  ADDFABRIC,
  ADDPRODUCT,
  ADD_FABRIC_PATTERN,
  ADD_IMPORT,
  ADD_KHWANTA_PRODUCT,
  ADD_SUPPLIER,
  END_LOADING,
  START_LOADING,
} from "../constants/actionTypes";

import {
  addDesign,
  addFabric,
  addFabricPattern,
  addImport,
  addKhwantaProduct,
  addproduct,
  addSupplier,
} from "../Api";

export const AddSupp = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addSupplier(input);
    dispatch({ type: ADD_SUPPLIER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const AddDesign = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addDesign(input);
    dispatch({ type: ADDDESIGN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const AddKhwantaCloth = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addproduct(input);
    dispatch({ type: ADDPRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const AddKhwanta = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addKhwantaProduct(input);
    dispatch({ type: ADD_KHWANTA_PRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const AddImportProduct = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addImport(input);
    dispatch({ type: ADD_IMPORT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const AddFabric = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addFabric(input);
    dispatch({ type: ADDFABRIC, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const AddFabricPattern = (input) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await addFabricPattern(input);
    dispatch({ type: ADD_FABRIC_PATTERN, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
