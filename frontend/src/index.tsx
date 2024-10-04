import { initializeIcons, mergeStyles } from "@fluentui/react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

initializeIcons();

// global styles
mergeStyles({
  ":global(body, html, #root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
