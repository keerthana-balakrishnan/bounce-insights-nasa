import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NASA_API_BASE_URL } from "./nasaApi.const";

const baseQuery = fetchBaseQuery({
  baseUrl: NASA_API_BASE_URL,
  prepareHeaders: (headers) => {
    // add headers if required
    return headers;
  },
});

const nasaApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export { nasaApi };
