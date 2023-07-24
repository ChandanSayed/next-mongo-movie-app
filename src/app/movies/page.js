'use client';
import styles from '../styles/common.module.css';
import MovieCard from '../components/MovieCard';

const Movie = async () => {
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4bf5bfa050mshf4c9bcf0a4dbef9p1056d6jsn4ccbc91b7a27',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const movieData = data.titles;
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
