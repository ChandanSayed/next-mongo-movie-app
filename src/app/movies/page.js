'use client';
import Axios from 'axios';
import styles from '../styles/common.module.css';
import MovieCard from '../components/MovieCard';
const Movie = async () => {
  let movieData;
  const options = {
    method: 'GET',
    url: 'https://netflix54.p.rapidapi.com/search/',
    params: {
      query: 'stranger',
      offset: '0',
      limit_titles: '50',
      limit_suggestions: '20',
      lang: 'en'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'b236cbbb75mshfb0524c6ee1441ep10608ejsn3ee83f764649',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  try {
    const response = await Axios.request(options);

    movieData = response.data.titles;
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies</h1>
          <div className={styles.card_section}>
            {movieData.map((item, i) => {
              return <MovieCard key={i} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
