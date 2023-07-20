import Axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/common.module.css';

const page = async ({ params }) => {
  const id = params.id;
  let movieData;
  const options = {
    method: 'GET',
    url: `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`,
    params: {
      query: 'stranger',
      offset: '0',
      limit_titles: '50',
      limit_suggestions: '20',
      lang: 'en',
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'b236cbbb75mshfb0524c6ee1441ep10608ejsn3ee83f764649',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
    },
  };
  try {
    const response = await Axios.request(options);
    movieData = response.data[0].details;
  } catch (error) {
    console.log(error);
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {' '}
        Movie App \ <span> {movieData.type} </span>{' '}
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image src={movieData.backgroundImage.url} alt={movieData.title} width={600} height={300} />
        </div>
        <div>
          <h1>{movieData.title}</h1>
          <p>{movieData.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
