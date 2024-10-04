import dotenv from "dotenv";
import fetch from "node-fetch";
import { MARS_ROVER_ENDPOINT, NASA_API_BASE_URL } from "./server.const.js";
dotenv.config();

const getMarsRoverImages = async (queryParam) => {
  if (!queryParam.date) {
    // adding this here because nasa service does not return a proper error message
    throw new Error("Date is required to fetch Mars Rover images");
  }

  const apiKey = process.env.NASA_API_KEY;
  const url = `${NASA_API_BASE_URL}${MARS_ROVER_ENDPOINT.replace(
    "{rover_name}",
    queryParam.rover_name
  )}?api_key=${apiKey}&earth_date=${queryParam.date}${
    queryParam.additionalParams ? queryParam.additionalParams : ""
  }`;

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

export { getMarsRoverImages };
