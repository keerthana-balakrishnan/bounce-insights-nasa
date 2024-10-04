import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { Spotlight } from "../Spotlight";
import { useGetPictureOfTheDayQuery } from "../../../store/pictureOfTheDay";
import moment from "moment";

jest.mock("../../../store/pictureOfTheDay");

const mockUseGetPictureOfTheDayQuery = useGetPictureOfTheDayQuery as jest.Mock;

describe("Spotlight Component", () => {
  beforeEach(() => {
    mockUseGetPictureOfTheDayQuery.mockReturnValue({
      data: {
        hdurl:
          "https://apod.nasa.gov/apod/image/2409/2024_09_18_ZM_Spis_50mm-Pano_Postupka_1500px.png",
        title: "Sample Title",
        date: "2024-09-18",
        copyright: "NASA",
      },
    });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render the image with title and date", () => {
    const { getByAltText, getByText } = render(<Spotlight />);
    const image = getByAltText("Sample Title");
    const title = getByText("Sample Title");
    const date = getByText("2024-09-18");

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it("should load the previous picture on left arrow click", async () => {
    const { getByTitle } = render(<Spotlight />);
    const leftArrow = getByTitle("Previous item");

    fireEvent.click(leftArrow);

    await waitFor(() => {
      expect(mockUseGetPictureOfTheDayQuery).toHaveBeenCalledWith(
        moment().subtract(1, "days").format("YYYY-MM-DD")
      );
    });
  });

  it("should load the next picture on right arrow click after clicking left arrow", async () => {
    const { getByTitle } = render(<Spotlight />);
    const leftArrow = getByTitle("Previous item");
    const rightArrow = getByTitle("Next item");

    expect(rightArrow).toBeDisabled();

    fireEvent.click(leftArrow);

    await waitFor(() => {
      expect(mockUseGetPictureOfTheDayQuery).toHaveBeenCalledWith(
        moment().subtract(1, "days").format("YYYY-MM-DD")
      );
    });

    fireEvent.click(rightArrow);

    await waitFor(() => {
      expect(mockUseGetPictureOfTheDayQuery).toHaveBeenCalledWith(
        moment().format("YYYY-MM-DD")
      );
    });
  });

  it("should disable the right arrow button if the current date is today", () => {
    const { getByTitle } = render(<Spotlight />);
    const rightArrow = getByTitle("Next item");

    expect(rightArrow).toBeDisabled();
  });
});
