import React from "react";
import PublicationGenre from "./main/PublicationGenre";
import ArticlesEmpiricalResearch from "./main/ArticlesEmpiricalResearch";
import ArticlesNewMethodological from "./main/ArticlesNewMethodological";
import BriefMessages from "./main/BriefMessages";
import LiteratureReviews from "./main/LiteratureReviews";
import MethodologicalAndOtherPublications from "./main/MethodologicalAndOtherPublications";
import MethodologicalAndTheoreticalArticles from "./main/MethodologicalAndTheoreticalArticles";
import PublicationsOtherGenres from "./main/PublicationsOtherGenres";
// Import PublicationGenre from "./main/PublicationGenre.jsx";

const PublicationGenresFull = () => {
  return (
   <>
   <PublicationGenre />
   <ArticlesEmpiricalResearch />
   <ArticlesNewMethodological/>
   <BriefMessages/>
   <LiteratureReviews/>
   <MethodologicalAndOtherPublications/>
   <MethodologicalAndTheoreticalArticles/>
   <PublicationsOtherGenres/>
   </>
  );
};

export default PublicationGenresFull;
