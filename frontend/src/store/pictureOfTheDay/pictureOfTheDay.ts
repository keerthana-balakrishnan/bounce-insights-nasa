import { nasaApi } from "../api/nasaApi";
import { PICTURE_OF_THE_DAY_ENDPOINT } from "../api/nasaApi.const";
import { PictureOfTheDayResponse } from "./pictureOfTheDay.types";

const pictureOfTheDay = nasaApi.injectEndpoints({
  endpoints: (builder) => ({
    getPictureOfTheDay: builder.query<PictureOfTheDayResponse, string>({
      query: (date) => {
        return {
          method: "GET",
          url: PICTURE_OF_THE_DAY_ENDPOINT,
          params: {
            date: date,
          },
        };
      },
    }),
  }),
});

export const { useGetPictureOfTheDayQuery } = pictureOfTheDay;
