import { RoverDetails } from "../../components/SplitView/SplitView.types";
import { MarsRoverPhoto } from "../../store/marsRover/marsRover.types";
import {
  getRoverMetadataToRender,
  processPhotos,
  splitImageSet,
} from "../splitView.util";

describe("processPhotos", () => {
  it("should return an empty array when no photos are provided", () => {
    const result = processPhotos();
    expect(result).toEqual([]);
  });

  it("should process photos correctly", () => {
    const photos = [
      {
        img_src: "http://example.com/photo1.jpg",
        rover: {
          name: "Curiosity",
          status: "active",
          launch_date: "2011-11-26",
          landing_date: "2012-08-06",
        },
        camera: {
          full_name: "Mast Camera",
        },
        earth_date: "2021-04-30",
      },
      {
        img_src: "http://example.com/photo2.jpg",
        rover: {
          name: "Opportunity",
          status: "complete",
          launch_date: "2003-07-07",
          landing_date: "2004-01-25",
        },
        camera: {
          full_name: "Panoramic Camera",
        },
        earth_date: "2018-06-10",
      },
    ] as MarsRoverPhoto[];

    const expected = [
      {
        imageUrl: "http://example.com/photo1.jpg",
        imageMetadata: {
          rover_name: "Curiosity",
          rover_status: "active",
          camera_name: "Mast Camera",
          rover_launch_date: "2011-11-26",
          rover_landing_date: "2012-08-06",
          photo_taken_date: "2021-04-30",
        },
      },
      {
        imageUrl: "http://example.com/photo2.jpg",
        imageMetadata: {
          rover_name: "Opportunity",
          rover_status: "complete",
          camera_name: "Panoramic Camera",
          rover_launch_date: "2003-07-07",
          rover_landing_date: "2004-01-25",
          photo_taken_date: "2018-06-10",
        },
      },
    ];

    const result = processPhotos(photos);
    expect(result).toEqual(expected);
  });
});
describe("getRoverMetadataToRender", () => {
  it("should return filtered and formatted rover metadata", () => {
    const roverDetails = {
      name: "Curiosity",
      status: "active",
      launchDate: "2011-11-26",
      landingDate: "2012-08-06",
    } as RoverDetails;

    const filter = ["name", "status", "launchDate"];

    const expected = [
      ["NAME", "Curiosity"],
      ["STATUS", "active"],
      ["LAUNCH DATE", "2011-11-26"],
    ];

    const result = getRoverMetadataToRender(roverDetails, filter);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when no filter matches", () => {
    const roverDetails = {
      name: "Curiosity",
      status: "active",
      launchDate: "2011-11-26",
      landingDate: "2012-08-06",
    } as RoverDetails;

    const filter = ["nonExistentKey"];

    const result = getRoverMetadataToRender(roverDetails, filter);
    expect(result).toEqual([]);
  });
});

describe("splitImageSet", () => {
  it("should split the image set into the specified number of parts", () => {
    const images = [
      { imageUrl: "http://example.com/photo1.jpg", imageMetadata: {} },
      { imageUrl: "http://example.com/photo2.jpg", imageMetadata: {} },
      { imageUrl: "http://example.com/photo3.jpg", imageMetadata: {} },
      { imageUrl: "http://example.com/photo4.jpg", imageMetadata: {} },
    ];

    const parts = 2;

    const expected = [
      [
        { imageUrl: "http://example.com/photo1.jpg", imageMetadata: {} },
        { imageUrl: "http://example.com/photo2.jpg", imageMetadata: {} },
      ],
      [
        { imageUrl: "http://example.com/photo3.jpg", imageMetadata: {} },
        { imageUrl: "http://example.com/photo4.jpg", imageMetadata: {} },
      ],
    ];

    const result = splitImageSet(images, parts);
    expect(result).toEqual(expected);
  });

  it("should handle splitting into more parts than images", () => {
    const images = [
      { imageUrl: "http://example.com/photo1.jpg", imageMetadata: {} },
      { imageUrl: "http://example.com/photo2.jpg", imageMetadata: {} },
    ];

    const parts = 3;

    const expected = [
      [{ imageUrl: "http://example.com/photo1.jpg", imageMetadata: {} }],
      [{ imageUrl: "http://example.com/photo2.jpg", imageMetadata: {} }],
      [],
    ];

    const result = splitImageSet(images, parts);
    expect(result).toEqual(expected);
  });
});
