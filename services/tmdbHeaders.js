export const headers = {
  accept: "application/json",
  Authorization:
    `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN_TMDB}.${process.env.NEXT_PUBLIC_API_READ_ACCESS_TMDB}`,
}