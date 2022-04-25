import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
     <Routes>
     <Route path="/" element={
      <App />} />
        </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);