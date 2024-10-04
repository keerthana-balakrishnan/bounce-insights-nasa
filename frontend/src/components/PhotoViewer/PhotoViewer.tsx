import {
  Image,
  ImageFit,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
} from "@fluentui/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { OverlayRenderProps } from "react-photo-view/dist/types";
import { getLayoutClass, styles } from "./PhotoViewer.styles";
import type {
  PhotoViewerImageMetadata,
  PhotoViewerProps,
} from "./PhotoViewer.types";

const PhotoViewerOverlay = ({ imageMetadata }: PhotoViewerImageMetadata) => {
  return (
    <Stack
      horizontalAlign="start"
      verticalAlign="end"
      className={styles.viewerOverlay}
    >
      {Object.keys(imageMetadata).map((key) => (
        <Text key={key} style={{ color: "white" }}>
          {key}: {imageMetadata[key]}
        </Text>
      ))}
    </Stack>
  );
};

const PhotoViewer = (props: PhotoViewerProps) => {
  if (props.image.length === 0) {
    return <Spinner size={SpinnerSize.large} />;
  }

  return (
    <PhotoProvider
      overlayRender={(overlayProps: OverlayRenderProps) => {
        return (
          <PhotoViewerOverlay
            imageMetadata={props.image[overlayProps.index].imageMetadata}
          />
        );
      }}
    >
      <Stack className={styles.gallery}>
        {props.image.slice(0, props.limit).map((item, index) => (
          <PhotoView src={item.imageUrl} key={index}>
            <Image
              src={item.imageUrl}
              className={getLayoutClass(index)}
              imageFit={ImageFit.cover}
              shouldFadeIn={true}
            />
          </PhotoView>
        ))}
      </Stack>
    </PhotoProvider>
  );
};

export { PhotoViewer };
