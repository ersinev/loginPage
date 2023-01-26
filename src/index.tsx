import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {Routes,Route, BrowserRouter } from "react-router-dom";
import AfterLogin from "./AfterLogin";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/home' element={<AfterLogin/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
