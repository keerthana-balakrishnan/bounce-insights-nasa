import express from "express";
import {
    getMarsRoverImagesController,
    getPictureOfTheDayController,
} from "../controllers/nasa.controller.js";

const router = express.Router();

router.get("/pictureoftheday", getPictureOfTheDayController);
router.get("/marsroverimages", getMarsRoverImagesController);

export { router };
