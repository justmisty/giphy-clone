/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";
import GifSearch from "../components/GifSearch";

const Home = () => {
  const { giphy, gifs, setGifs, filter } = GifState();
  const fetchTrendingGifs = async () => {
    const { data } = await giphy.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });

    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div>
      <img //HEADER BANNER IMAGE
        src="/public/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      
      <FilterGif showTrending /> {/* Gifs Filter Component*/}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
