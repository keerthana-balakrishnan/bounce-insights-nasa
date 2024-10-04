import { nasaApi } from "../api/nasaApi";
import { MARS_ROVER_ENDPOINT } from "../api/nasaApi.const";
import { MarsRoverRequest, MarsRoverResponse } from "./marsRover.types";

const marsRover = nasaApi.injectEndpoints({
  endpoints: (builder) => ({
    getMarsRoverImages: builder.query<MarsRoverResponse, MarsRoverRequest>({
      query: (request) => {
        return {
          method: "GET",
          url: MARS_ROVER_ENDPOINT,
          params: {
            rover_name: request.name,
            date: request.date,
          },
        };
      },
    }),
  }),
});

export const { useGetMarsRoverImagesQuery } = marsRover;
