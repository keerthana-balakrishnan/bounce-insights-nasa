import { getPictureOfTheDay } from "../pictureOfTheDay.service.js";
import fetch from "node-fetch";

jest.mock("node-fetch");

describe("getPictureOfTheDay", () => {
  const mockApiKey = "mockApiKey";
  const mockDate = "2023-10-01";
  const mockUrl = `https://api.nasa.gov/planetary/apod?api_key=${mockApiKey}&date=${mockDate}`;

  beforeAll(() => {
    process.env.NASA_API_KEY = mockApiKey;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return picture data when the API call is successful", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ title: "Mock Title", url: "http://mockurl.com" }),
    };
    fetch.mockResolvedValue(mockResponse);

    const result = await getPictureOfTheDay({ date: mockDate });

    expect(fetch).toHaveBeenCalledWith(mockUrl);
    expect(result).toEqual({ title: "Mock Title", url: "http://mockurl.com" });
  });

  it("should return an error object when the API call fails", async () => {
    const mockErrorResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue({ error: "Mock Error" }),
    };
    fetch.mockResolvedValue(mockErrorResponse);

    const result = await getPictureOfTheDay({ date: mockDate });

    expect(fetch).toHaveBeenCalledWith(mockUrl);
    expect(result).toEqual({
      error: "Failed to fetch data from NASA API",
      details: { error: "Mock Error" },
    });
  });
});