import HomeComponent from "@/components/Home";
import { getTopRatedMovies } from "@/services/topRatedMoviesService";

export default async function Home() {
  const moviesData = await getTopRatedMovies();
  let results = [];

  if (moviesData.success) {
    if (moviesData?.data?.results?.length > 10) {
      results = moviesData.data.results.slice(0, 10);
    }
  }

  return <HomeComponent movies={results} />;
}
