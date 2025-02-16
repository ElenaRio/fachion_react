import styles from './Promo.module.css';
import promoImg from '../../img/images/header-img.jpg';
import Button from '../button/Button';

function Promo() {
  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.promoContent}>
          <div className={styles.promoText}>
            <h2 className={styles.promoTitle}>
              <span className={styles.highlight}>
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className={styles.yellow}>
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h2>
            <p className={styles.promoDesc}>
              Live for Influential and Innovative fashion!
            </p>
            <Button withBefore/>
          </div>
          <div className={styles.promoImg}>
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Promo;
