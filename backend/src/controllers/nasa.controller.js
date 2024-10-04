import { getMarsRoverImages } from "../services/marsRover.service.js";
import { getPictureOfTheDay } from "../services/pictureOfTheDay.service.js";

async function getPictureOfTheDayController(req, res, next) {
  try {
    const response = await getPictureOfTheDay(req.query);
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(`Error while getting picture of the day`, err.message);
    next(err);
  }
}

async function getMarsRoverImagesController(req, res, next) {
  try {
    const response = await getMarsRoverImages(req.query);
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(`Error while getting Mars Rover images`, err.message);
    next(err);
  }
}

export { getMarsRoverImagesController, getPictureOfTheDayController };
