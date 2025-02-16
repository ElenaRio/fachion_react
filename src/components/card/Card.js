import styles from './Card.module.css';
import arrowImg from './../../img/icons/arrow.svg';

function Card({title, img}) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={img} alt="category" />
      <div className={styles.cardBody}>
        <div className={styles.cardText}>
          <h3 className={styles.cardTextTitle}>{title}</h3>
          <p className={styles.cardTextDec}>Explore Now!</p>
        </div>
        <div className={styles.cardIcon}>
          <img src={arrowImg} alt="Open" />
        </div>
      </div>
    </div>
  );
}

export default Card;
