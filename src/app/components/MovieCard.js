import styles from '../styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';
const MovieCard = item => {
  const { id, title, synopsis } = item.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={item.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
        </div>
        <div className={styles.card_data}>
          <h2 style={{ minHeight: '46px' }}>{title}</h2>
          <p style={{ minHeight: '76.8px' }}>{`${synopsis.substring(0, 66)} ...`}</p>

          <Link href={`/movies/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
