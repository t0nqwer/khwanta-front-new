import {
  ADDDESIGN,
  ADDFABRIC,
  ADDPRODUCT,
  ADD_FABRIC_PATTERN,
  ADD_IMPORT,
  ADD_KHWANTA_PRODUCT,
  ADD_SUPPLIER,
} from "../../constants/actionTypes";

export default (singleproduct = [], action) => {
  switch (action.type) {
    case ADDDESIGN:
        console.log(action.payload);
      return action.payload;
    case ADDFABRIC:
        console.log(action.payload);
      return action.payload;
    case ADDPRODUCT:
        console.log(action.payload);
      return action.payload;
    case ADD_FABRIC_PATTERN:
        console.log(action.payload);
      return action.payload;
    case ADD_IMPORT:
        console.log(action.payload);
      return action.payload;
    case ADD_KHWANTA_PRODUCT:
        console.log(action.payload);
      return action.payload;
    case ADD_SUPPLIER:
        console.log(action.payload);
      return action.payload;
    default:
      return singleproduct;
  }
};
