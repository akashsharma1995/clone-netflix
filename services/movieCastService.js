import  { headers } from "./tmdbHeaders";
import { tmdbBaseURL } from '@/constants/tmdbURLs';

const options = {
  method: "GET",
  headers: headers,
};

export const getMovieCast = async (id) => {
  try {
    const res = await fetch(`${tmdbBaseURL}/3/movie/${id}/credits?language=en-US`, options);
    const data = await res.json();
    return {
      success: true,
      data
    };
  }catch(err) {
    return {
      success: false,
      message: err,
    }
  }
}