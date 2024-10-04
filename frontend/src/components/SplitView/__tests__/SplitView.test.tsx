import { render, screen } from "@testing-library/react";
import { SplitView } from "../SplitView";
import { useGetMarsRoverImagesQuery } from "../../../store/marsRover";
import { MARS_ROVERS } from "../SplitView.const";

jest.mock("../../../store/marsRover");

describe("SplitView Component", () => {
  beforeEach(() => {
    (useGetMarsRoverImagesQuery as jest.Mock).mockReturnValue({
      data: {
        photos: [
          {
            rover: {
              name: "test",
              status: "active",
              img_src: "./test.jpg",
            },
            camera: {
              full_name: "test camera",
            },
            earth_date: "2021-01-01",
          },
        ],
      },
    });
  });

  it("renders rover details", () => {
    render(<SplitView />);

    MARS_ROVERS.forEach((rover, index) => {
      expect(screen.getByText(rover.name)).toBeInTheDocument();
      expect(
        screen.getAllByRole("button", { name: /learn more/i })[index]
      ).toBeInTheDocument();
    });
  });

  it("renders the correct number of PhotoViewer components", () => {
    render(<SplitView />);
    expect(screen.getAllByTestId("photo-viewer")).toHaveLength(
      MARS_ROVERS.length
    );
  });
});
