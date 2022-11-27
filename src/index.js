import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { StrictMode } from "react";
import { ContextProvider } from "./Context/ContextProvider";
import { AuthContextProvider } from "./Context/AuthContext";

import { reducers } from "./reducers";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <StrictMode>
      <AuthContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </AuthContextProvider>
    </StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );
