import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Loader from "./loader";
import Home from "../routes/home";
import Error404 from "../routes/404";

const App = ({ loading }) => (
  <div style={{ height: "100%" }}>
    <Loader loading={loading > 0} />
    <div class="container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  </div>
);

export default connect((state) => ({ ...state.app }))(App);
