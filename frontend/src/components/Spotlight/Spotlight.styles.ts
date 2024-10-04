import { mergeStyleSets } from "@fluentui/react";
import { SpotlightStyles } from "./Spotlight.types";

const styles = mergeStyleSets<SpotlightStyles>({
  caraouselContainer: {
    position: "relative",
    width: "100%",
    height: "500px",
  },
  caraouselImage: {
    overflow: "hidden",
    width: "100%",
    height: "500px",
    borderRadius: "16px",
  },
  imageShimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#0078d4",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fcfcfcdb",
  },
});

export { styles };
