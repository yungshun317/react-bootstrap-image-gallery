import React from "react";
import { render } from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

const rootElement = document.getElementById("root");

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);