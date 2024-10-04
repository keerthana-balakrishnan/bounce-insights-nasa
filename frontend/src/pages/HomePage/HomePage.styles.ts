import { mergeStyleSets } from "@fluentui/react";
import { HomePageStyles } from "./HomePage.types";

const styles = mergeStyleSets<HomePageStyles>({
  root: {
    padding: "0px 100px",
    "@media(max-width: 600px)": { padding: "0px 10px" },
  },
  title: {
    color: "#fcfcfcdb",
    fontSize: "48px",
  },
});

export { styles };
