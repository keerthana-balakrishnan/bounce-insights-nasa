import { mergeStyleSets } from "@fluentui/react";
import { VisualModelsStyles } from "./VisualModels.types";

const styles = mergeStyleSets<VisualModelsStyles>({
  root: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "16px",
    minHeight: "700px",
  },
});

export { styles };
