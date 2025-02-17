import styles from './HeaderBasket.module.css';

function HeaderBasket() {
  return (
    <header className={styles.basketHeader}>
      <div className={styles.title}>Name</div>
      <div className={styles.count}>Quantity</div>
      <div className={styles.cost}> Total Price</div>
    </header>
  );
}

export default HeaderBasket;
