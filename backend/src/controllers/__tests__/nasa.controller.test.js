import { getPictureOfTheDayController } from "../nasa.controller.js";
import { getPictureOfTheDay } from "../../services/pictureOfTheDay.service.js";
import { jest } from "@jest/globals";

// Mock the entire module
jest.mock("../../services/pictureOfTheDay.service.js", () => ({
  getPictureOfTheDay: jest.fn(),
}));

describe("getPictureOfTheDayController", () => {
  let req, res, next;

  beforeEach(() => {
    req = { query: {} };
    res = {
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("should return picture of the day data", async () => {
    const mockData = { title: "Mock Picture of the Day" };
    getPictureOfTheDay.mockResolvedValue(mockData);

    await getPictureOfTheDayController(req, res, next);

    expect(getPictureOfTheDay).toHaveBeenCalledWith(req.query);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it("should handle errors", async () => {
    const error = new Error("Something went wrong");
    getPictureOfTheDay.mockRejectedValue(error);

    await getPictureOfTheDayController(req, res, next);

    expect(getPictureOfTheDay).toHaveBeenCalledWith(req.query);
    expect(next).toHaveBeenCalledWith(error);
  });
});
