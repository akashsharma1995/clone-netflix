import  { headers } from "./tmdbHeaders";
import { tmdbBaseURL } from '@/constants/tmdbURLs';

const options = {
  method: "GET",
  headers: headers,
};

export const getMovieCast = async (id) => {
  console.log("headers = ", headers)
  console.log("bearer token =",process.env.API_BEARER_TOKEN_TMDB)
  console.log(process.env)
  console.log("url = ", `${tmdbBaseURL}/3/movie/${id}/credits?language=en-US`)
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