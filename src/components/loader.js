import React from "react";
import "./loader.css";

export default ({ loading }) => (
  <div
    class="fixed-top animated loader"
    style={{ display: loading ? "block" : "none" }}
  />
);
