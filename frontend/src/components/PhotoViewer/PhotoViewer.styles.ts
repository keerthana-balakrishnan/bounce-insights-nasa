import { mergeStyleSets } from "@fluentui/react";
import { PhotoViewerStyles } from "./PhotoViewer.types";

const styles = mergeStyleSets<PhotoViewerStyles>({
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "auto",
    gridAutoFlow: "dense",
    gap: "8px",
  },
  image: {
    cursor: "pointer",
    borderRadius: "16px",
  },
  imageLayout: {
    gridRow: "span 2 / auto",
    gridColumn: "span 2 / auto",
  },
  wideImageLayout: {
    gridColumn: "span 4",
    height: "auto",
  },
  viewerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    zIndex: 1000,
    width: "100%",
  },
});

const getLayoutClass = (index: number) => {
  if (index % 3 === 0) {
    return `${styles.imageLayout} ${styles.image}`;
  } else if (index % 5 === 0) {
    return `${styles.wideImageLayout} ${styles.image}`;
  } else {
    return styles.image;
  }
};

export { styles, getLayoutClass };
