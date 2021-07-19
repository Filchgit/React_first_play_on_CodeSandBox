import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <p>
      {" "}
      I can enclose many things inside one 'render' as long as they are within a
      single HTML element and a div counts as a single element!
    </p>
  </div>,
  document.getElementById("root")
);
