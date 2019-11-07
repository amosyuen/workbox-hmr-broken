import React from "react";
import ReactDOM from "react-dom";

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <div>
      <h1>Title</h1>
    </div>,
    MOUNT_NODE
  );
};

render();

if (module.hot) {
  module.hot.accept();
}
