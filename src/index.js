import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { StrictMode } from "react";
import { ContextProvider } from "./Context/ContextProvider";

import { reducers } from "./reducers";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );
