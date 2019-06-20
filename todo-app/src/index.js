import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import "semantic-ui-css/semantic.min.css";
import logger from "redux-logger";
import App from "./App";

const store = createStore(reducer, applyMiddleware(logger));

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
