import styles from './PlayDay.module.css';
import playdayImg from './../../img/images/promo-img.jpg';
import Button from '../button/Button';

function PlayDay(){
    return(
            <section className={styles.promo}>
      <div className="container">
        <div className={styles.promoContent}>
          <div className={styles.promoImg}>
            <img src={playdayImg} alt="Playday" />
          </div>

          <div className={styles.promoText}>
            <h2 className={styles.promoTitle}>
              <span className={styles.highlight}>
                <span>PAYDAY</span>
              </span><hr/>
              SALE NOW            
              </h2>
            <p className={styles.promoDesc}>
            Spend minimal $100 get 30% off
            voucher code for your next purchase
            <span>1 June - 10 June 2021</span>
           *Terms & Conditions apply</p>
            <Button/>
          </div>
        </div>
      </div>
    </section>
       
    )
}
export default PlayDay;