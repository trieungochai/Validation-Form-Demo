import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DemoForm from "./DemoForm";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <DemoForm />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
