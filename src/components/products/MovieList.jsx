import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMovie } from "../../context/MovieContextProvider";
import { Box } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getMovies();
    setPage(1);
  }, [searchParams]);
  const { getMovies, movies } = useMovie();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getMovies();
  }, []);
  const itemPerPage = 6;
  const count = Math.ceil(movies.length / itemPerPage);
  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endIndex = beginIndex + itemPerPage;
    return movies.slice(beginIndex, endIndex);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <MovieCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PagintaionContolled
        page={page}
        count={count}
        handleChange={handleChange}
      />
    </div>
  );
};

export default MovieList;
