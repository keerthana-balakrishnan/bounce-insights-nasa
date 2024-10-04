import { mergeStyleSets } from "@fluentui/react";
import { SplitViewStyles } from "./SplitView.types";

const styles = mergeStyleSets<SplitViewStyles>({
  item: {
    width: "45%",
    "@media(max-width: 768px)": {
      width: "100%",
    },
  },
  card: {
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 10px 0px;",
    "@media(max-width: 768px)": {
      padding: "10px 0px 20px 10px",
    },
  },
  title: {
    color: "#0078d4",
    fontWeight: "bold",
    fontSize: "40px",
  },
  description: {
    color: "#fcfcfcdb",
  },
  additionalInfo: {
    "@media(max-width: 768px)": {
      paddingRight: "10px",
    },
  },
  cardOrder: {
    "@media(max-width: 768px)": {
      order: "unset",
    },
  },
});

export { styles };
