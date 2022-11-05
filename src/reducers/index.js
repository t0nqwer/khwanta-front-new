import { combineReducers } from "redux";

import FabricType from "./Reducer/fabrictype";
import product from "./Reducer/product";
import singleproduct from "./Reducer/singleproduct";
import warehouse from "./Reducer/warehouse";
import Stock from "./Reducer/Stock";
import designcode from "./Reducer/designcode";

export const reducers = combineReducers({

  Stock: Stock,
  FabricType: FabricType,

  product: product,
  singleproduct: singleproduct,
  warehouse: warehouse,
  designcode,
});
