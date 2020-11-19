import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FaArrowCircleUp from "./components/scrollArrow";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FaArrowCircleUp />
  </React.StrictMode>,
  document.getElementById("root")
);

//ReactDOM.render(<ScrollApp/>, document.getElementById('scroll'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
