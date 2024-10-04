import { IStyle } from "@fluentui/react";

type PhotoViewerStyles = {
  gallery: IStyle;
  image: IStyle;
  imageLayout: IStyle;
  wideImageLayout: IStyle;
  viewerOverlay: IStyle;
};

type PhotoViewerImageMetadata = {
  imageMetadata: Record<string, string>;
};

type PhotoViewerImage = {
  imageUrl: string;
} & PhotoViewerImageMetadata;

type PhotoViewerProps = {
  image: PhotoViewerImage[];
  limit?: number;
};
export type {
  PhotoViewerStyles,
  PhotoViewerProps,
  PhotoViewerImage,
  PhotoViewerImageMetadata,
};
