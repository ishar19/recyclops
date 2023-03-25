import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/UserProvider";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <HelmetProvider>
        <UserProvider>
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </UserProvider>
      </HelmetProvider>
    </BrowserRouter>
  </RecoilRoot>
);
