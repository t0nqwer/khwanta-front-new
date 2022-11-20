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
