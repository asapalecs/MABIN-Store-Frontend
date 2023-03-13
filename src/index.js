import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.createElement("root");
const root = createRoot(document.getElementById("root"));
root.render(<App />);
