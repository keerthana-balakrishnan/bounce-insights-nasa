import {
  Link,
  mergeStyles,
  PrimaryButton,
  Stack,
  Text,
  TooltipHost,
} from "@fluentui/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetMarsRoverImagesQuery } from "../../store/marsRover";
import { notificationString, splitViewStrings } from "../../strings";
import {
  getRoverMetadataToRender,
  processPhotos,
  splitImageSet,
} from "../../utils/splitView.util";
import { PhotoViewer } from "../PhotoViewer";
import type { PhotoViewerImage } from "../PhotoViewer";
import { DETAILS_TO_RENDER, MARS_ROVERS } from "./SplitView.const";
import { styles } from "./SplitView.styles";
import type { RoverDetails } from "./SplitView.types";

const RoverDetailsPresentation = (roverDetails: RoverDetails) => {
  return (
    <Stack.Item
      className={mergeStyles(styles.item, styles.card, styles.cardOrder)}
      order={roverDetails.id % 2}
    >
      <Stack
        tokens={{ childrenGap: 20 }}
        verticalFill
        verticalAlign="space-between"
      >
        <Text
          variant="xxLarge"
          className={styles.title}
          data-testid="rover-title"
        >
          {roverDetails.name}
        </Text>
        <Text
          variant="medium"
          className={styles.description}
          data-testid="rover-description"
        >
          {roverDetails.description}
        </Text>
        {getRoverMetadataToRender(roverDetails, DETAILS_TO_RENDER).map(
          ([key, value]) => (
            <Stack
              key={key}
              horizontal
              horizontalAlign="space-between"
              className={styles.additionalInfo}
            >
              <Text variant="medium" className={styles.description}>
                <strong>{key}</strong>
              </Text>
              <Text variant="medium" className={styles.description}>
                <strong>{value}</strong>
              </Text>
            </Stack>
          )
        )}
        <Stack.Item>
          <Link target="_blank" href={MARS_ROVERS[roverDetails.id].referance}>
            <PrimaryButton>{splitViewStrings.learn_more}</PrimaryButton>
          </Link>
        </Stack.Item>
      </Stack>
    </Stack.Item>
  );
};

const SplitView = () => {
  const {
    data: curiosity_data,
    isError,
    isSuccess,
  } = useGetMarsRoverImagesQuery(MARS_ROVERS[0]);

  useEffect(() => {
    if (isError) {
      toast.error(notificationString.errorMarsRover);
    }
    if (isSuccess) {
      toast.info(notificationString.clickMarsImage);
    }
  }, [isError, isSuccess]);

  const curiosity_images: PhotoViewerImage[] = processPhotos(
    curiosity_data?.photos
  );
  const splitImages = splitImageSet(curiosity_images, 3);

  return (
    <Stack tokens={{ childrenGap: 70 }}>
      {MARS_ROVERS.map((roverDetails) => (
        <Stack
          key={roverDetails.id}
          horizontal
          horizontalAlign="space-between"
          wrap
          tokens={{ childrenGap: 30 }}
        >
          <RoverDetailsPresentation {...roverDetails} />

          <Stack.Item className={styles.item} data-testid="photo-viewer">
            <TooltipHost content={splitViewStrings.tooltip}>
              <PhotoViewer image={splitImages[roverDetails.id]} limit={5} />
            </TooltipHost>
          </Stack.Item>
        </Stack>
      ))}
    </Stack>
  );
};

export { SplitView };
