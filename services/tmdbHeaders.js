export const headers = {
  accept: "application/json",
  Authorization:
    `Bearer ${process.env.API_BEARER_TOKEN_TMDB}.${process.env.API_READ_ACCESS_TMDB}`,
}