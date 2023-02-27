import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </UserProvider>
  </BrowserRouter>
);
