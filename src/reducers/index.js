import { combineReducers } from "redux";

import FabricType from "./Reducer/fabrictype";
import product from "./Reducer/product";
import singleproduct from "./Reducer/singleproduct";
import warehouse from "./Reducer/warehouse";
import Stock from "./Reducer/Stock";
import designcode from "./Reducer/designcode";
import category from "./Reducer/category";
import add from "./Reducer/add";

export const reducers = combineReducers({
  Stock: Stock,
  FabricType: FabricType,
  category: category,
  product: product,
  singleproduct: singleproduct,
  warehouse: warehouse,
  designcode,
  add,
});
