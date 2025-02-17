import styles from './CardBuy.module.css';


function CardBuy({ title, img, price, addToCart }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg}  src={img} alt={title} />
      <div className={styles.cardText}>
        <h3 className={styles.cardTextTitle}>{title}</h3>
        <p className={styles.cardPrice}>{price} $</p>
        <button onClick={addToCart} className={styles.cardBtn} type='button'>
        Add to Cart
        </button>
      </div>
    </div>
  );
}
export default CardBuy;
