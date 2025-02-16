import styles from './CardBuy.module.css';

function CardBuy({ title, img, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={img} alt="category" />
      <div className={styles.cardText}>
        <h3 className={styles.cardTextTitle}>{title}</h3>
        <p className={styles.cardPrice}>{price} $</p>
        <a href="#!" className={styles.cardBtn}>
          Shop now
        </a>
      </div>
    </div>
  );
}
export default CardBuy;
