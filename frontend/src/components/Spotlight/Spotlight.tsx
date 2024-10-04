import {
  IconButton,
  Image,
  ImageFit,
  mergeStyles,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
} from "@fluentui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  useGetPictureOfTheDayQuery,
  PictureOfTheDayResponse,
} from "../../store/pictureOfTheDay";
import { styles } from "./Spotlight.styles";
import { toast } from "react-toastify";
import { notificationString } from "../../strings";

const defaultPictureOfTheDay: Partial<PictureOfTheDayResponse> = {
  hdurl:
    "https://apod.nasa.gov/apod/image/2409/2024_09_18_ZM_Spis_50mm-Pano_Postupka_1500px.png",
  title: "Logo",
  date: "2024-09-18",
};

const Spotlight: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const { data, isError } = useGetPictureOfTheDayQuery(currentDate);
  const [isImageLoading, setIsImageLoading] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(notificationString.errorPictureOfTheDay);
    }
  }, [isError]);

  const loadPicture = (isPrevious: boolean) => {
    const previousDate = isPrevious
      ? moment(currentDate).subtract(1, "days").format("YYYY-MM-DD")
      : moment(currentDate).add(1, "days").format("YYYY-MM-DD");
    setCurrentDate(previousDate);
    setIsImageLoading(true);
  };

  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <Stack.Item className={styles.caraouselContainer}>
        {isImageLoading && <Spinner size={SpinnerSize.large} />}
        <Image
          src={data ? data.hdurl : defaultPictureOfTheDay.hdurl}
          alt={data ? data.title : defaultPictureOfTheDay.title}
          className={mergeStyles(styles.caraouselImage, styles.imageShimmer)}
          imageFit={ImageFit.cover}
          shouldFadeIn={true}
          onLoadingStateChange={(loadState) => {
            loadState === 1 && setIsImageLoading(false);
          }}
        />
      </Stack.Item>
      <Stack.Item>
        <Stack
          horizontal
          tokens={{ childrenGap: 10 }}
          horizontalAlign="space-between"
        >
          <Stack>
            <Text variant="mediumPlus" className={styles.title}>
              {data?.title}
            </Text>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
              {data?.copyright && (
                <Text
                  variant="small"
                  className={styles.subtitle}
                >{`by ${data.copyright}`}</Text>
              )}
              <Text variant="small" className={styles.subtitle}>
                {data?.date}
              </Text>
            </Stack>
          </Stack>
          <Stack.Item>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
              <IconButton
                iconProps={{ iconName: "ChevronLeft" }}
                title="Previous item"
                onClick={() => {
                  loadPicture(true);
                }}
              />
              <IconButton
                iconProps={{ iconName: "ChevronRight" }}
                title="Next item"
                onClick={() => {
                  loadPicture(false);
                }}
                disabled={moment(currentDate).isSame(
                  moment().format("YYYY-MM-DD")
                )}
              />
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export { Spotlight };
