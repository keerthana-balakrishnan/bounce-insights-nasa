import { mergeStyleSets } from "@fluentui/react";
import { HeaderStyles } from "./Header.types";

const styles = mergeStyleSets<HeaderStyles>({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    background: "black",
  },
  menuButtons: {
    display: "none",
    "@media(min-width: 600px)": { display: "flex" },
  },
  menuButton: {
    padding: "10px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#191919",
    },
  },
  menuButtonText: {
    color: "#fcfcfcdb !important",
    fontWeight: 700,
    "> *": {
      color: "#fcfcfcdb !important",
      fontWeight: 700,
    },
  },
  menuButtonSelected: {
    color: "#0078d4",
    borderBottom: "2px solid #0078d4",
  },
  logo: {
    "@media(max-width: 600px)": {
      order: 1,
    },
  },
  navButton: {
    display: "flex",
    backgroundColor: "black !important",
    "@media(min-width: 600px)": {
      display: "none",
    },
  },
});

export { styles };
