import { PhotoViewerImage } from "../components/PhotoViewer/PhotoViewer.types";
import { RoverDetails } from "../components/SplitView/SplitView.types";
import { MarsRoverPhoto } from "../store/marsRover/marsRover.types";

const processPhotos = (photos?: MarsRoverPhoto[]): PhotoViewerImage[] => {
  return (
    photos?.map((photo) => ({
      imageUrl: photo.img_src,
      imageMetadata: {
        rover_name: photo.rover.name,
        rover_status: photo.rover.status,
        camera_name: photo.camera.full_name,
        rover_launch_date: photo.rover.launch_date,
        rover_landing_date: photo.rover.landing_date,
        photo_taken_date: photo.earth_date,
      },
    })) || []
  );
};

const splitImageSet = (array: PhotoViewerImage[], parts: number) => {
  const result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

const getRoverMetadataToRender = (
  roverDetails: RoverDetails,
  filter: string[]
) => {
  return Object.entries(roverDetails)
    .filter(([key]) => filter.includes(key))
    .map(([key, value]) => [
      key
        .replace(/([A-Z])/g, " $1")
        .trim()
        .toLocaleUpperCase(),
      value,
    ]);
};

export { processPhotos, splitImageSet, getRoverMetadataToRender };
