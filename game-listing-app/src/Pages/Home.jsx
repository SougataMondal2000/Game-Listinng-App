import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

const Home = () => {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const[selectedGenre, setSelectedGenre] =useState('Action')

  useEffect(() => {
    getAllGamesList();
    getGameListbyGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  const getGameListbyGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:flex">
        <GenreList setGenreId={(setGenresId)=>getGameListbyGenresId(setGenresId)} selectedGenre={(name)=>setSelectedGenre(name)} className=""/>
      </div>
      <div className="md:col-span-3 col-span-4 px-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId gameList={gameListByGenres} selectedGenre={selectedGenre}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
