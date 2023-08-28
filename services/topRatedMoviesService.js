import { headers } from "./tmdbHeaders";
import { topRatedMoviesURL } from "@/constants/tmdbURLs";

const options = {
  method: "GET",
  headers: headers,
};

export const getTopRatedMovies = async () => {
  try {
    const resp = await fetch(
      `${topRatedMoviesURL}?language=en-US&page=1`,
      options
    );
    const result = await resp.json();
    return {
      success: true,
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      message: err,
    };
  }
};
