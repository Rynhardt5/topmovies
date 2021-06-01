export const genreFormatter = (arrGenres) => {
  let genres = "";
  if (arrGenres.length > 1) {
    for (let genre of arrGenres) {
      if (genre === arrGenres[arrGenres.length - 1])
        return (genres += ` and ${genre}`);
      if (genre === arrGenres[arrGenres.length - 2]) {
        genres += `${genre} `;
      } else {
        genres += `${genre}, `;
      }
    }
  }

  return genres;
};
