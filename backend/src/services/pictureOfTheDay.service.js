import dotenv from "dotenv";
import fetch from "node-fetch";
import {
  NASA_API_BASE_URL,
  PICTURE_OF_THE_DAY_ENDPOINT,
} from "./server.const.js";

dotenv.config();

const getPictureOfTheDay = async (queryParam) => {
  const apiKey = process.env.NASA_API_KEY;
  const url = `${NASA_API_BASE_URL}${PICTURE_OF_THE_DAY_ENDPOINT}?api_key=${apiKey}&date=${queryParam.date}`;

  const response = await fetch(url);
  const status = response.status;
  const responseSuccess = response.ok;
  const data = await response.json();

  if (!responseSuccess) {
    return {
      status: status,
      data:{
        error: "Failed to fetch data from NASA API",
        details: data,
      }
    };
  }
  return {
    status: status,
    data:data
  };
};

export { getPictureOfTheDay };
