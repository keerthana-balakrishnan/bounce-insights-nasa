import { getMarsRoverImages } from "../marsRover.service.js";
import fetch from "node-fetch";

jest.mock("node-fetch");

describe("getMarsRoverImages", () => {
  const mockApiKey = "test-api-key";
  const mockQueryParam = {
    date: "2021-07-01",
    rover_name: "curiosity",
    additionalParams: "&camera=fhaz"
  };

  beforeAll(() => {
    process.env.NASA_API_KEY = mockApiKey;
  });

  afterAll(() => {
    delete process.env.NASA_API_KEY;
  });

  it("should throw an error if date is not provided", async () => {
    await expect(getMarsRoverImages({})).rejects.toThrow("Date is required to fetch Mars Rover images");
  });

  it("should return data when the API call is successful", async () => {
    const mockResponse = {
      photos: [{ id: 1, img_src: "http://example.com/image1.jpg" }]
    };

    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const result = await getMarsRoverImages(mockQueryParam);
    expect(result).toEqual(mockResponse);
  });

  it("should return an error object when the API call fails", async () => {
    const mockErrorResponse = {
      error: "API key invalid"
    };

    fetch.mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(mockErrorResponse)
    });

    const result = await getMarsRoverImages(mockQueryParam);
    expect(result).toEqual({
      error: "Failed to fetch data from NASA API",
      details: mockErrorResponse
    });
  });
});