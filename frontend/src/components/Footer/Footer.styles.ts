import { mergeStyleSets } from "@fluentui/react";
import { FooterStyles } from "./Footer.types";

const styles = mergeStyleSets<FooterStyles>({
  root: {
    padding: "48px",
  },
  footerText: {
    color: "#fcfcfcdb",
  },
  icon: {
    fontSize: "28px",
    cursor: "pointer",
  },
});

export { styles };
